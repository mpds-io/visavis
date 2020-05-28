/**
 * Vis-à-vis web-viewer
 * Author: Evgeny Blokhin /
 * Tilde Materials Informatics
 * eb@tilde.pro
 * Version: 0.6.0
 */
"use strict";

/**
 *
 * SHIMS AND CUSTOMIZATION
 *
 */
// IE Object.assign polyfill
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, "assign", {
    value: function assign(target, varArgs) { // .length of function is 2
      if (target == null) { // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource != null) { // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

var ie_passing_check = (function(){
    function detect_ie(){
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0){
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0){
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0){
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        return false;
    }
    var version = detect_ie();
    if (!version) return true;
    if (version < 11) return false;
    return true;
}());

if (!ie_passing_check){
    alert("Please, upgrade your browser");
    throw new Error("Unsupported user agent");
}

if (!console) console = {log: function(){}};

Array.prototype.extend = function(other_array){
    other_array.forEach(function(v){ this.push(v) }, this);
}


/**
 *
 * SETTINGS
 *
 */
var visavis = {};

visavis.local_supported = window.File && window.FileReader && window.FileList && window.Blob;
try {
    visavis.mpds_embedded = window.parent && window.parent.wmgui;
} catch (e){
    visavis.mpds_embedded = false;
}

visavis.facet_names = {props: 'properties', elements: 'elements', classes: 'classes', lattices: 'crystal systems'};

visavis.cache = null; // looks like {type: json.use_visavis_type, ref: reference_data, cmp: comparison_data}

visavis.graph_mapping = {f: 'formulae', p: 'props', h: 'aetypes', t: 'lattices', a: 'codens', g: 'geos'};

visavis.graph_default_rel = 'prel';

visavis.force = null;

visavis.elementals = null; // object of arrays of concrete values (repeating server's ELEMENTALS), 96 elements each (0 and 1-95 i.e. H-Am)

visavis.elementals_on = [];

visavis.colorset = ['#ccc', '#FE9A2E', '#acc2b3', '#E36868', '#777', '#999', '#c00'];

visavis.heatcolors = ['rgb(150,0,90)', 'rgb(0,0,200)', 'rgb(0,25,255)', 'rgb(0,152,255)', 'rgb(44,255,150)', 'rgb(151,255,0)', 'rgb(255,234,0)', 'rgb(255,111,0)', 'rgb(255,0,0)'];

visavis.svg = null;

visavis.svgdim = null;

visavis.svgmargin = {top: 26, right: 0, bottom: 0, left: 24};

visavis.el_orders = {}; // object of arrays of sorting indeces, 95 elements each (1-95 i.e. H-Am)

visavis.chem_els = [null, 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr', 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs', 'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np', 'Pu', 'Am'];

visavis.pd_phases = {};

visavis.fixel_shown = false;

visavis.nonformers_shown = true;

visavis.pd_bin_nonformers = [[88, 23], [88, 41], [46, 78], [46, 82], [46, 5], [46, 26], [46, 23], [46, 28], [46, 25], [46, 31], [46, 76], [46, 24], [46, 41], [46, 27], [46, 75], [46, 81], [46, 77], [46, 74], [46, 44], [46, 43], [46, 13], [46, 80], [46, 91], [46, 22], [12, 3], [12, 82], [12, 47], [12, 54], [12, 30], [12, 31], [12, 79], [12, 48], [12, 18], [12, 10], [12, 81], [12, 13], [12, 49], [12, 80], [12, 29], [94, 23], [94, 41], [94, 92], [94, 93], [94, 91], [17, 6], [32, 78], [32, 82], [32, 81], [32, 80], [78, 82], [78, 25], [78, 31], [78, 41], [78, 14], [78, 77], [78, 44], [78, 43], [78, 13], [78, 73], [55, 19], [55, 62], [55, 25], [55, 63], [55, 56], [55, 24], [55, 41], [55, 59], [55, 27], [55, 60], [55, 58], [55, 20], [55, 61], [55, 37], [55, 21], [55, 22], [55, 38], [55, 69], [4, 82], [4, 47], [4, 28], [3, 82], [3, 30], [3, 31], [3, 48], [3, 2], [3, 10], [3, 13], [3, 49], [3, 29], [4, 30], [4, 31], [4, 79], [82, 47], [82, 23], [82, 28], [82, 25], [82, 30], [82, 31], [82, 79], [82, 41], [82, 40], [82, 75], [82, 14], [82, 81], [82, 74], [82, 50], [82, 13], [82, 49], [82, 72], [82, 22], [82, 29], [4, 81], [4, 50], [4, 49], [4, 51], [4, 80], [4, 29], [19, 57], [19, 26], [19, 62], [19, 25], [19, 56], [19, 70], [19, 24], [19, 41], [19, 10], [19, 59], [19, 60], [19, 93], [19, 20], [19, 37], [19, 64], [19, 21], [19, 68], [19, 22], [19, 38], [19, 69], [47, 23], [47, 25], [47, 30], [47, 31], [47, 48], [47, 2], [47, 24], [47, 41], [47, 81], [47, 13], [47, 49], [47, 80], [47, 29], [57, 23], [57, 62], [57, 71], [57, 56], [57, 2], [57, 24], [57, 41], [57, 40], [57, 59], [57, 60], [57, 58], [57, 93], [57, 20], [57, 61], [57, 72], [57, 89], [57, 21], [57, 91], [57, 22], [57, 73], [57, 39], [5, 25], [5, 31], [5, 76], [5, 27], [26, 28], [26, 79], [26, 24], [26, 27], [26, 75], [26, 81], [26, 45], [26, 74], [26, 44], [26, 43], [5, 45], [5, 77], [23, 54], [23, 28], [23, 65], [23, 67], [23, 62], [23, 63], [5, 44], [23, 79], [23, 66], [23, 18], [23, 56], [23, 2], [23, 70], [23, 11], [23, 41], [23, 10], [23, 59], [23, 92], [23, 81], [23, 45], [23, 60], [23, 58], [23, 93], [23, 36], [23, 20], [23, 61], [23, 64], [23, 89], [23, 68], [23, 91], [23, 22], [23, 73], [23, 38], [23, 69], [54, 71], [54, 2], [54, 11], [54, 41], [54, 40], [54, 58], [54, 36], [54, 72], [54, 21], [54, 22], [54, 39], [5, 42], [28, 25], [28, 76], [28, 2], [28, 41], [28, 10], [28, 40], [28, 27], [28, 75], [28, 81], [28, 74], [28, 44], [28, 43], [28, 72], [28, 42], [28, 80], [28, 22], [28, 73], [65, 67], [65, 63], [65, 66], [65, 70], [65, 41], [65, 93], [65, 61], [65, 72], [65, 64], [65, 89], [65, 21], [65, 68], [65, 22], [65, 73], [65, 38], [65, 69], [65, 39], [67, 63], [67, 71], [67, 66], [67, 2], [67, 70], [67, 41], [67, 40], [67, 93], [67, 20], [67, 61], [67, 72], [67, 64], [67, 89], [67, 21], [67, 68], [67, 22], [67, 73], [67, 38], [67, 69], [67, 39], [62, 71], [62, 56], [62, 24], [62, 41], [62, 40], [62, 93], [62, 20], [62, 72], [62, 89], [62, 91], [62, 22], [62, 73], [62, 38], [62, 69], [62, 39], [25, 48], [25, 18], [25, 56], [25, 2], [25, 11], [25, 10], [25, 75], [25, 81], [25, 43], [25, 37], [86, 41], [30, 31], [30, 79], [30, 48], [30, 81], [30, 13], [30, 49], [30, 80], [30, 29], [63, 66], [63, 2], [63, 70], [63, 41], [63, 93], [63, 20], [63, 61], [63, 72], [63, 64], [63, 89], [63, 21], [63, 68], [63, 22], [63, 73], [63, 38], [63, 69], [63, 39], [31, 79], [31, 48], [31, 81], [31, 13], [31, 49], [31, 80], [31, 29], [71, 18], [71, 2], [71, 11], [71, 10], [71, 40], [71, 58], [71, 36], [71, 20], [71, 72], [71, 89], [71, 21], [71, 91], [71, 38], [71, 69], [71, 39], [79, 76], [79, 41], [79, 40], [79, 75], [79, 81], [79, 74], [79, 43], [79, 50], [79, 22], [0, 41], [66, 2], [66, 70], [66, 41], [66, 93], [66, 20], [66, 61], [66, 72], [66, 64], [66, 89], [66, 68], [66, 22], [66, 73], [66, 38], [66, 69], [66, 39], [0, 29], [48, 41], [48, 13], [48, 72], [48, 22], [48, 29], [76, 75], [76, 45], [76, 77], [76, 74], [76, 44], [76, 43], [76, 42], [52, 15], [52, 33], [18, 2], [18, 11], [18, 41], [18, 40], [18, 36], [18, 72], [18, 21], [18, 22], [18, 39], [56, 2], [56, 70], [56, 24], [56, 41], [56, 40], [56, 59], [56, 60], [56, 58], [56, 93], [56, 74], [56, 20], [56, 61], [56, 72], [56, 89], [56, 21], [56, 91], [56, 22], [56, 73], [56, 69], [2, 70], [2, 11], [2, 24], [2, 41], [2, 10], [2, 40], [2, 59], [2, 27], [2, 60], [2, 58], [2, 93], [2, 36], [2, 61], [2, 72], [2, 64], [2, 21], [2, 68], [2, 22], [2, 38], [2, 39], [70, 41], [70, 40], [70, 59], [70, 93], [70, 61], [70, 72], [70, 64], [70, 89], [70, 21], [70, 68], [70, 22], [70, 73], [70, 38], [70, 69], [70, 39], [11, 24], [11, 41], [11, 10], [11, 40], [11, 36], [11, 21], [11, 91], [11, 22], [11, 39], [24, 81], [24, 37], [24, 80], [24, 69], [41, 10], [41, 40], [41, 59], [41, 92], [41, 90], [41, 60], [41, 58], [41, 93], [41, 87], [41, 36], [41, 20], [41, 61], [41, 37], [41, 72], [41, 64], [41, 42], [41, 89], [41, 21], [41, 80], [41, 68], [41, 22], [41, 73], [41, 38], [41, 69], [10, 40], [10, 36], [10, 37], [10, 72], [10, 21], [10, 22], [10, 39], [40, 93], [40, 36], [40, 20], [40, 61], [40, 72], [40, 89], [40, 21], [40, 80], [40, 91], [40, 22], [40, 73], [40, 38], [40, 69], [40, 39], [59, 60], [59, 58], [59, 93], [59, 20], [59, 61], [59, 37], [59, 72], [59, 89], [59, 21], [59, 91], [59, 22], [59, 73], [59, 69], [27, 75], [27, 81], [27, 45], [27, 74], [27, 44], [27, 43], [27, 42], [27, 80], [27, 73], [75, 45], [75, 77], [75, 74], [75, 44], [75, 43], [81, 50], [81, 13], [81, 49], [81, 80], [81, 73], [81, 29], [45, 77], [45, 74], [45, 44], [45, 43], [45, 42], [45, 73], [60, 58], [60, 93], [60, 61], [60, 89], [60, 22], [58, 93], [58, 61], [58, 72], [58, 89], [58, 21], [58, 91], [58, 22], [58, 73], [58, 69], [14, 50], [77, 43], [77, 42], [93, 61], [93, 72], [93, 64], [93, 21], [93, 68], [93, 22], [93, 73], [93, 38], [93, 69], [36, 72], [36, 21], [36, 22], [36, 39], [74, 44], [74, 43], [74, 50], [74, 49], [74, 42], [44, 43], [44, 42], [50, 13], [50, 73], [20, 37], [20, 72], [20, 64], [20, 89], [20, 21], [20, 91], [20, 22], [20, 73], [20, 38], [20, 69], [20, 39], [33, 51], [13, 49], [13, 80], [13, 29], [61, 72], [61, 64], [61, 89], [61, 68], [61, 91], [61, 22], [61, 73], [61, 38], [49, 80], [49, 29], [37, 21], [37, 22], [37, 38], [15, 51], [72, 64], [72, 89], [72, 21], [72, 80], [72, 68], [72, 91], [72, 38], [72, 69], [72, 39], [64, 89], [64, 21], [64, 68], [64, 22], [64, 73], [64, 38], [64, 69], [64, 39], [89, 21], [89, 68], [89, 91], [89, 22], [89, 73], [89, 38], [89, 69], [89, 39], [21, 68], [21, 22], [21, 73], [21, 38], [21, 69], [21, 39], [80, 22], [80, 29], [68, 22], [68, 73], [68, 38], [68, 69], [91, 22], [91, 73], [91, 38], [91, 69], [22, 73], [22, 38], [22, 69], [73, 38], [73, 69], [38, 69], [38, 39], [46, 45], [78, 23], [78, 28], [78, 24], [78, 45], [47, 11], [57, 67], [57, 63], [57, 66], [57, 70], [57, 64], [57, 68], [57, 38], [26, 25], [26, 76], [26, 77], [23, 25], [23, 27], [23, 21], [54, 18], [28, 24], [28, 45], [28, 77], [65, 56], [65, 59], [65, 60], [65, 58], [67, 56], [67, 59], [67, 60], [67, 58], [25, 76], [25, 24], [25, 27], [25, 45], [25, 44], [25, 22], [63, 56], [63, 59], [63, 60], [63, 58], [66, 56], [66, 59], [66, 60], [66, 58], [48, 80], [76, 27], [56, 64], [56, 68], [56, 38], [70, 60], [70, 58], [24, 27], [24, 22], [59, 64], [59, 68], [59, 38], [27, 77], [45, 22], [60, 64], [60, 68], [60, 38], [58, 64], [58, 68], [58, 38], [77, 74], [77, 44], [77, 73], [93, 39], [43, 22], [72, 22], [72, 73], [21, 91]]; // 759 non-formers + ordered phases, 03/2020 by PV

visavis.pd_tri_nonformers = {
'x': [25, 73, 3, 14, 32, 77, 48, 90, 41, 47, 30, 26, 81, 14, 26, 26, 44, 26, 31, 73, 25, 24, 59, 23, 26, 26, 66, 26, 29, 26, 70, 13, 30, 25, 57, 92, 13, 44, 73, 13, 77, 39, 25, 29, 47, 26, 3, 23, 58, 30, 58, 14, 13, 58, 26, 58, 24, 77, 46, 47, 81, 92, 25, 64, 27, 47, 12, 64, 25, 24, 24, 11, 28, 26, 39, 28, 57, 40, 60, 22, 50, 57, 25, 25, 24, 24, 26, 27, 26, 77, 30, 13, 31, 30, 27, 80, 14, 29, 31, 23, 21, 26, 41, 26, 25, 24, 13, 47, 13, 49, 65, 13, 48, 13, 26, 26, 41, 46, 27, 26, 13, 46, 77, 72, 22, 27, 24, 38, 24, 13, 23, 78, 27, 47, 90, 26, 27, 65, 29, 24, 29, 59, 26, 40, 27, 47, 48, 27, 25, 58, 22, 27, 75, 26, 26, 13, 77, 26, 73, 46, 13, 40, 24, 29, 27, 13, 23, 57, 22, 48, 26, 83, 25, 29, 30, 46, 13, 27, 57, 13, 46, 47, 22, 14, 73, 81, 46, 26, 41, 30, 43, 27, 58, 22, 90, 31, 26, 30, 25, 58, 27, 13, 31, 58, 25, 46, 73, 30, 77, 57, 25, 30, 28, 31, 21, 72, 47, 28, 13, 65, 26, 22, 25, 58, 41, 26, 23, 57, 28, 72, 46, 29, 4, 13, 13, 50, 57, 29, 29, 22, 59, 73, 27, 3, 48, 26, 29, 73, 24, 29, 83, 26, 29, 83, 73, 14, 25, 30, 58, 13, 14, 13, 26, 73, 81, 92, 29, 76, 30, 48, 26, 57, 64, 29, 28, 12, 22, 24, 28, 24, 81, 48, 47, 24, 78, 23, 26, 14, 49, 73, 27, 14, 73, 3, 27, 92, 20, 29],
'y': [47, 23, 12, 32, 83, 46, 50, 40, 23, 46, 83, 27, 49, 50, 45, 27, 78, 46, 14, 41, 27, 28, 22, 24, 29, 28, 39, 29, 83, 44, 60, 14, 31, 26, 59, 22, 30, 78, 23, 31, 46, 22, 27, 28, 46, 29, 12, 24, 39, 48, 64, 47, 49, 68, 77, 90, 26, 76, 78, 46, 48, 23, 26, 40, 44, 78, 25, 39, 26, 47, 42, 24, 46, 77, 22, 46, 24, 73, 62, 41, 83, 22, 29, 29, 26, 29, 29, 78, 28, 46, 48, 49, 50, 48, 28, 83, 32, 47, 80, 29, 22, 46, 29, 29, 27, 29, 30, 77, 14, 14, 66, 50, 32, 14, 77, 28, 42, 78, 28, 27, 31, 44, 76, 40, 41, 46, 26, 20, 26, 31, 26, 74, 29, 46, 40, 47, 47, 66, 47, 29, 47, 68, 28, 73, 29, 83, 31, 46, 81, 64, 41, 44, 76, 27, 29, 30, 44, 29, 22, 78, 30, 22, 29, 28, 29, 31, 24, 23, 42, 50, 28, 5, 27, 83, 48, 44, 50, 75, 58, 30, 44, 32, 24, 32, 42, 30, 45, 28, 29, 50, 28, 28, 39, 23, 92, 50, 27, 31, 26, 39, 75, 30, 14, 22, 29, 78, 41, 49, 44, 39, 23, 48, 47, 80, 41, 40, 78, 44, 30, 64, 28, 23, 81, 39, 23, 27, 26, 58, 77, 22, 74, 28, 13, 50, 48, 32, 64, 46, 28, 24, 39, 22, 28, 12, 83, 77, 44, 41, 28, 78, 33, 83, 28, 51, 22, 47, 23, 50, 40, 83, 50, 14, 46, 41, 48, 41, 47, 46, 31, 49, 27, 65, 39, 28, 46, 25, 23, 29, 47, 26, 48, 50, 83, 29, 45, 42, 29, 47, 31, 22, 29, 83, 23, 25, 28, 22, 25, 46],
'z': [79, 74, 25, 82, 82, 45, 82, 41, 42, 78, 82, 46, 31, 32, 6, 45, 79, 6, 32, 23, 82, 46, 24, 42, 46, 45, 67, 82, 79, 45, 68, 32, 83, 27, 62, 74, 48, 45, 42, 80, 6, 74, 28, 44, 79, 79, 40, 26, 94, 31, 90, 83, 14, 90, 44, 40, 28, 44, 45, 45, 50, 24, 47, 21, 45, 6, 48, 71, 28, 46, 74, 29, 45, 6, 41, 78, 26, 22, 64, 23, 82, 24, 79, 47, 46, 28, 77, 45, 6, 78, 50, 31, 83, 82, 44, 82, 83, 82, 83, 46, 23, 45, 74, 83, 29, 79, 14, 46, 50, 32, 39, 32, 82, 83, 45, 44, 74, 6, 47, 47, 50, 78, 78, 41, 74, 45, 79, 25, 29, 32, 46, 79, 46, 44, 22, 46, 46, 67, 83, 47, 46, 69, 82, 41, 28, 79, 82, 44, 28, 40, 42, 78, 44, 77, 47, 31, 78, 28, 23, 79, 82, 41, 74, 82, 78, 83, 74, 26, 74, 83, 77, 51, 47, 82, 83, 79, 83, 28, 90, 83, 45, 79, 74, 79, 74, 50, 79, 47, 42, 82, 6, 78, 90, 24, 24, 32, 28, 32, 29, 21, 78, 32, 50, 23, 28, 74, 74, 31, 45, 68, 29, 49, 6, 82, 23, 22, 79, 78, 50, 66, 46, 74, 29, 71, 74, 29, 29, 39, 46, 41, 79, 74, 14, 82, 50, 82, 67, 78, 78, 42, 90, 41, 45, 48, 82, 76, 78, 42, 74, 79, 82, 82, 46, 82, 42, 32, 26, 83, 21, 82, 82, 82, 79, 29, 49, 23, 79, 78, 50, 31, 44, 71, 67, 47, 74, 26, 42, 42, 46, 83, 82, 32, 82, 46, 79, 74, 45, 79, 32, 74, 47, 79, 29, 29, 46, 41, 26, 79],
'labels': ['Mn-Ag-Au', 'Ta-V-W', 'Li-Mg-Mn', 'Si-Ge-Pb', 'Ge-Bi-Pb', 'Ir-Pd-Rh', 'Cd-Sn-Pb', 'Th-Zr-Nb', 'Nb-V-Mo', 'Ag-Pd-Pt', 'Zn-Bi-Pb', 'Fe-Co-Pd', 'Tl-In-Ga', 'Si-Sn-Ge', 'Fe-Rh-C', 'Fe-Co-Rh', 'Ru-Pt-Au', 'Fe-Pd-C', 'Ga-Si-Ge', 'Ta-Nb-V', 'Mn-Co-Pb', 'Cr-Ni-Pd', 'Pr-Ti-Cr', 'V-Cr-Mo', 'Fe-Cu-Pd', 'Fe-Ni-Rh', 'Dy-Y-Ho', 'Fe-Cu-Pb', 'Cu-Bi-Au', 'Fe-Ru-Rh', 'Yb-Nd-Er', 'Al-Si-Ge', 'Zn-Ga-Bi', 'Mn-Fe-Co', 'La-Pr-Sm', 'U-Ti-W', 'Al-Zn-Cd', 'Ru-Pt-Rh', 'Ta-V-Mo', 'Al-Ga-Hg', 'Ir-Pd-C', 'Y-Ti-W', 'Mn-Co-Ni', 'Cu-Ni-Ru', 'Ag-Pd-Au', 'Fe-Cu-Au', 'Li-Mg-Zr', 'V-Cr-Fe', 'Ce-Y-Pu', 'Zn-Cd-Ga', 'Ce-Gd-Th', 'Si-Ag-Bi', 'Al-In-Si', 'Ce-Er-Th', 'Fe-Ir-Ru', 'Ce-Th-Zr', 'Cr-Fe-Ni', 'Ir-Os-Ru', 'Pd-Pt-Rh', 'Ag-Pd-Rh', 'Tl-Cd-Sn', 'U-V-Cr', 'Mn-Fe-Ag', 'Gd-Zr-Sc', 'Co-Ru-Rh', 'Ag-Pt-C', 'Mg-Mn-Cd', 'Gd-Y-Lu', 'Mn-Fe-Ni', 'Cr-Ag-Pd', 'Cr-Mo-W', 'Na-Cr-Cu', 'Ni-Pd-Rh', 'Fe-Ir-C', 'Y-Ti-Nb', 'Ni-Pd-Pt', 'La-Cr-Fe', 'Zr-Ta-Ti', 'Nd-Sm-Gd', 'Ti-Nb-V', 'Sn-Bi-Pb', 'La-Ti-Cr', 'Mn-Cu-Au', 'Mn-Cu-Ag', 'Cr-Fe-Pd', 'Cr-Cu-Ni', 'Fe-Cu-Ir', 'Co-Pt-Rh', 'Fe-Ni-C', 'Ir-Pd-Pt', 'Zn-Cd-Sn', 'Al-In-Ga', 'Ga-Sn-Bi', 'Zn-Cd-Pb', 'Co-Ni-Ru', 'Hg-Bi-Pb', 'Si-Ge-Bi', 'Cu-Ag-Pb', 'Ga-Hg-Bi', 'V-Cu-Pd', 'Sc-Ti-V', 'Fe-Pd-Rh', 'Nb-Cu-W', 'Fe-Cu-Bi', 'Mn-Co-Cu', 'Cr-Cu-Au', 'Al-Zn-Si', 'Ag-Ir-Pd', 'Al-Si-Sn', 'In-Si-Ge', 'Tb-Dy-Y', 'Al-Sn-Ge', 'Cd-Ge-Pb', 'Al-Si-Bi', 'Fe-Ir-Rh', 'Fe-Ni-Ru', 'Nb-Mo-W', 'Pd-Pt-C', 'Co-Ni-Ag', 'Fe-Co-Ag', 'Al-Ga-Sn', 'Pd-Ru-Pt', 'Ir-Os-Pt', 'Hf-Zr-Nb', 'Ti-Nb-W', 'Co-Pd-Rh', 'Cr-Fe-Au', 'Sr-Ca-Mn', 'Cr-Fe-Cu', 'Al-Ga-Ge', 'V-Fe-Pd', 'Pt-W-Au', 'Co-Cu-Pd', 'Ag-Pd-Ru', 'Th-Zr-Ti', 'Fe-Ag-Pd', 'Co-Ag-Pd', 'Tb-Dy-Ho', 'Cu-Ag-Bi', 'Cr-Cu-Ag', 'Cu-Ag-Pd', 'Pr-Er-Tm', 'Fe-Ni-Pb', 'Zr-Ta-Nb', 'Co-Cu-Ni', 'Ag-Bi-Au', 'Cd-Ga-Pb', 'Co-Pd-Ru', 'Mn-Tl-Ni', 'Ce-Gd-Zr', 'Ti-Nb-Mo', 'Co-Ru-Pt', 'Re-Os-Ru', 'Fe-Co-Ir', 'Fe-Cu-Ag', 'Al-Zn-Ga', 'Ir-Ru-Pt', 'Fe-Cu-Ni', 'Ta-Ti-V', 'Pd-Pt-Au', 'Al-Zn-Pb', 'Zr-Ti-Nb', 'Cr-Cu-W', 'Cu-Ni-Pb', 'Co-Cu-Pt', 'Al-Ga-Bi', 'V-Cr-W', 'La-V-Fe', 'Ti-Mo-W', 'Cd-Sn-Bi', 'Fe-Ni-Ir', 'Bi-B-Sb', 'Mn-Co-Ag', 'Cu-Bi-Pb', 'Zn-Cd-Bi', 'Pd-Ru-Au', 'Al-Sn-Bi', 'Co-Re-Ni', 'La-Ce-Th', 'Al-Zn-Bi', 'Pd-Ru-Rh', 'Ag-Ge-Au', 'Ti-Cr-W', 'Si-Ge-Au', 'Ta-Mo-W', 'Tl-Zn-Sn', 'Pd-Rh-Au', 'Fe-Ni-Ag', 'Nb-Cu-Mo', 'Zn-Sn-Pb', 'Tc-Ni-C', 'Co-Ni-Pt', 'Ce-Y-Th', 'Ti-V-Cr', 'Th-U-Cr', 'Ga-Sn-Ge', 'Fe-Co-Ni', 'Zn-Ga-Ge', 'Mn-Fe-Cu', 'Ce-Y-Sc', 'Co-Re-Pt', 'Al-Zn-Ge', 'Ga-Si-Sn', 'Ce-Ti-V', 'Mn-Cu-Ni', 'Pd-Pt-W', 'Ta-Nb-W', 'Zn-In-Ga', 'Ir-Ru-Rh', 'La-Y-Er', 'Mn-V-Cu', 'Zn-Cd-In', 'Ni-Ag-C', 'Ga-Hg-Pb', 'Sc-Nb-V', 'Hf-Zr-Ti', 'Ag-Pt-Au', 'Ni-Ru-Pt', 'Al-Zn-Sn', 'Tb-Gd-Dy', 'Fe-Ni-Pd', 'Ti-V-W', 'Mn-Tl-Cu', 'Ce-Y-Lu', 'Nb-V-W', 'Fe-Co-Cu', 'V-Fe-Cu', 'La-Ce-Y', 'Ni-Ir-Pd', 'Hf-Ti-Nb', 'Pd-W-Au', 'Cu-Ni-W', 'Be-Al-Si', 'Al-Sn-Pb', 'Al-Cd-Sn', 'Sn-Ge-Pb', 'La-Gd-Ho', 'Cu-Pd-Pt', 'Cu-Ni-Pt', 'Ti-Cr-Mo', 'Pr-Y-Th', 'Ta-Ti-Nb', 'Co-Ni-Rh', 'Li-Mg-Cd', 'Cd-Bi-Pb', 'Fe-Ir-Os', 'Cu-Ru-Pt', 'Ta-Nb-Mo', 'Cr-Ni-W', 'Cu-Pt-Au', 'Bi-As-Pb', 'Fe-Bi-Pb', 'Cu-Ni-Pd', 'Bi-Sb-Pb', 'Ta-Ti-Mo', 'Si-Ag-Ge', 'Mn-V-Fe', 'Zn-Sn-Bi', 'Ce-Zr-Sc', 'Al-Bi-Pb', 'Si-Sn-Pb', 'Al-Si-Pb', 'Fe-Pd-Au', 'Ta-Nb-Cu', 'Tl-Cd-In', 'U-Nb-V', 'Cu-Ag-Au', 'Os-Pd-Pt', 'Zn-Ga-Sn', 'Cd-In-Ga', 'Fe-Co-Ru', 'La-Tb-Lu', 'Gd-Y-Ho', 'Cu-Ni-Ag', 'Ni-Pd-W', 'Mg-Mn-Fe', 'Ti-V-Mo', 'Cr-Cu-Mo', 'Ni-Ag-Pd', 'Cr-Fe-Bi', 'Tl-Cd-Pb', 'Cd-Sn-Ge', 'Ag-Bi-Pb', 'Cr-Cu-Pd', 'Pt-Rh-Au', 'V-Mo-W', 'Fe-Cu-Rh', 'Si-Ag-Au', 'In-Ga-Ge', 'Ta-Ti-W', 'Co-Cu-Ag', 'Si-Bi-Au', 'Ta-V-Cu', 'Li-Mn-Cu', 'Co-Ni-Pd', 'U-Ti-Nb', 'Ca-Mn-Fe', 'Cu-Pd-Au']
}; // 298 non-formers

/**
 *
 * COMMON UTILS
 *
 */
function notify(msg){
    hide_preloader();
    if (visavis.mpds_embedded)
        window.parent.wmgui.notify(msg);
    else
        alert(msg);
    return false;
}

function urge(msg){
    hide_preloader();
    var elem = document.getElementById('urge');
    elem.innerHTML = msg;
    elem.style.display = 'block';
    return false;
}

function cancel_event(evt){
    evt = evt || window.event;
    if (evt.cancelBubble) evt.cancelBubble = true;
    else {
        if (evt.stopPropagation) evt.stopPropagation();
        if (evt.preventDefault) evt.preventDefault();
    }
}

function warn_demo(){
    if (visavis.mpds_embedded && !window.parent.wmgui.sid) document.getElementById('demobox').style.display = 'block';
}

function display_landing(){
    if (window.location.search && window.location.search.indexOf('nobanner') !== -1)
        return;
    warn_demo();
    if (visavis.local_supported)
        document.getElementById('landing').style.display = 'block';
    else if (!window.parent)
        notify('Please, paste "#" symbol and data URL in address bar and hit enter');
}

function show_preloader(){
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('preloader').style.display = 'block';
}

function hide_preloader(){
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function hide_messages(){
    document.getElementById('urge').style.display = 'none';
    document.getElementById('landing').style.display = 'none';
}

function call_ajax(url, callback){
    show_preloader();

    Plotly.d3.json(url, function(error, json){
        if (error) return notify('Connection error, please, retry');
        callback(json);
    });
}

function handleFileSelect(evt){
    cancel_event(evt);

    if (evt.dataTransfer.files.length > 1)
        return notify('Error: only one file at the time may be rendered');

    var file = evt.dataTransfer.files[0];
    if (!file || !file.size)
        return notify('Error: file cannot be read (unaccessible?)');

    var reader = new FileReader();

    reader.onloadend = function(evt){
        initialize(evt.target.result, true);
    }
    reader.abort = function(){ notify('Error: file reading has been cancelled') }
    reader.onerror = function(){ notify('Error: file reading has been cancelled') }

    reader.readAsText(file);
}

function handleDragOver(evt){
    cancel_event(evt);
    show_preloader();
    evt.dataTransfer.dropEffect = 'copy';
}

function order_els(how){
    return visavis.chem_els.slice(1).sort(function(a, b){
        return visavis.elementals[how][visavis.chem_els.indexOf(a)] - visavis.elementals[how][visavis.chem_els.indexOf(b)];
    });
}

function convert_to_axis(array, how){
    if (how == 'num') return array;

    var converted = [];
    array.forEach(function(el){
        converted.push(visavis.el_orders[how].indexOf(el - 1) + 1);
    });
    return converted;
}

// Get pre-define coordinates for piechart labels (FIXME?)
function locate_label(values){
    var x,
        y,
        left = values[0],
        top = values[1];

    if (left[0] == 0 && left[1] == 0.32) x = 0.08;
    else if (left[0] == 0.67 && left[1] == 1) x = 0.92;
    else if (left[0] == 0 && left[1] == 0.49) x = 0.17;
    else if (left[0] == 0.51 && left[1] == 1) x = 0.83;
    else x = left.reduce(function(a, b){ return a + b }, 0)/2; // avg

    y = top[0];
    if (y <= 0.03) y = 0;
    else if (y == 0.34) y = 0.318;
    else if (y == 0.53) y = 0.51;

    return {x: x, y: y};
}

function shake(list){
    return list.map(function(x){ return x + ((Math.random() < 0.5) ? -0.1 : 0.1) });
}

function gen_shake(){
    return Math.floor(Math.random()*25) * ((Math.floor(Math.random()*2) == 1) ? 0.01 : -0.01);
}

function init_download(given){

    if (!given || given.target){ // NB from HashChangeEvent 
        given = document.location.hash.substr(1);
        visavis.cache = null;
    }

    if (given.indexOf('://') > 3)
        call_ajax(given, initialize);
    else
        notify('Error: not a valid URL');
}

function initialize(json, to_parse){
    reset_canvas();

    if (to_parse){
        try {
            json = JSON.parse(json);
        } catch(e){
            return notify('Error: unreadable JSON data');
        }
    }
    if (json && json.error) return urge(json.error);
    if (!json || !json.use_visavis_type) return urge('Error: unknown data format');
    if (json.warning) notify(json.warning);

    if (window['visavis__' + json.use_visavis_type]) window['visavis__' + json.use_visavis_type](json);
    else return urge('Error: unknown data type');
}

function run(data, layout, options, clickhandler){
    Plotly.newPlot('visavis', data, layout, options).then(function(){
        hide_preloader();
        hide_messages();
        if (clickhandler) clickhandler();
    });
}

function reset_canvas(){
    Plotly.d3.selectAll('svg').remove();
    Plotly.purge('visavis');
    document.getElementById('demobox').style.display = 'none';
    document.getElementById('cross').style.display = 'none';
    document.getElementById('heatmaplegend').style.display = 'none';
    document.getElementById('cmplegend').style.display = 'none';
    document.getElementById('expander').style.display = 'none';
    document.getElementById('switcher').style.display = 'none';
    document.getElementById('nonformers').style.display = 'none';
    document.getElementById('pdtracer').style.display = 'none';
    document.getElementById('fixel').style.display = 'none';
}

function set_cmp_legend(cmp, ref){
    document.getElementById('leg_cmp_sel').innerHTML = cmp;
    document.getElementById('leg_cmp_ref').innerHTML = ref;
    document.getElementById('heatmaplegend').style.display = 'none';
    document.getElementById('cmplegend').style.display = 'block';
}

/**
 * Core PCA pattern recognition of first (ref) (+ second (cmp)),
 * depends on *visavis.elementals_on* array
 *
 * @param first {points: ..., name: ...}
 * @param OPTIONAL second {points: ..., name: ...}
 * @returns structure for plotting OR false
 */
function discover(first, second){
    if (!window.mlPca) return urge('Sorry, your web-browser is too old for this task');

    var to_predict = [],
        labels = [],
        nlen = visavis.elementals_on.length,
        given_separation = false;

    if (!first.points.length || (second && !second.points.length)) return urge('Error: not enough data for analysis');

    for (var i = 0; i < first.points.length; i++){

        var prop_array = [],
            label = [];

        for (var j = 0; j < first.points[0].length; j++){

            for (var k = 0; k < nlen; k++){
                prop_array.push( visavis.elementals[visavis.elementals_on[k]][ first.points[i][j] ] );
            }

            label.push(visavis.chem_els[ first.points[i][j] ]);
        }
        to_predict.push(prop_array);
        labels.push(label.filter(function(x){ return x }).join('-'));
    }

    if (second){
        given_separation = to_predict.length;

        for (var i = 0; i < second.points.length; i++){

            var prop_array = [],
                label = [];

            for (var j = 0; j < second.points[0].length; j++){

                for (var k = 0; k < nlen; k++){
                    prop_array.push( visavis.elementals[visavis.elementals_on[k]][ second.points[i][j] ] );
                }

                label.push(visavis.chem_els[ second.points[i][j] ]);
            }

            label = label.filter(function(x){ return x }).join('-');
            // discard points in the *second* that are already in the *first*
            if (labels.indexOf(label) == -1){
                to_predict.push(prop_array);
                labels.push(label);
            }
        }
        if (to_predict.length == given_separation) return urge('Error: a selected dataset is fully included into a reference dataset');
    }

    if (to_predict.length > 21000) return urge('Error: too much data for analysis');

    var pca = new mlPca(to_predict),
        predicted = pca.predict(to_predict, {nComponents: 2});

    if (second){
        return [{
            discovery: predicted.slice(0, given_separation),
            labels: labels.slice(0, given_separation),
            name: first.name
        }, {
            discovery: predicted.slice(given_separation),
            labels: labels.slice(given_separation),
            name: second.name
        }];
    }
    return [{
        discovery: predicted,
        labels: labels,
        name: first.name
    }];
}

function get_pd_filling(nphases){
    if (nphases == 1)
        return '#d1cde6';

    else if (nphases == 3)
        return '#fc6';

    else if (nphases == 4)
        return '#FCD3C2';

    else if (nphases == 5)
        return '#CCE7D4';

    else return '#eee';
}

function make_absolute_context(element, root){
    return function(x, y){
        var offset = root.getBoundingClientRect();
        var matrix = element.getScreenCTM();
        return {
            x: (matrix.a * x) + (matrix.c * y) + matrix.e - offset.left,
            y: (matrix.b * x) + (matrix.d * y) + matrix.f - offset.top
        }
    }
}

function get_absolute_coords(el, ref){
    var fn = make_absolute_context(el, ref);
    var b = el.getBBox();
    return fn(b.x, b.y);
}

function pd_fix_triangle(){
    var svgroot = Plotly.d3.select("svg.main-svg")[0][0], // window
        graph_node = Plotly.d3.select("g.toplevel.plotbg")[0][0], // graph frame
        graph_coords = get_absolute_coords(graph_node, svgroot),
        svg_el = Plotly.d3.select("g.layer-above"), // actual drawing
        svg_node = svg_el[0][0];

    graph_node = graph_node.getBoundingClientRect();
    svg_node = svg_node.getBoundingClientRect();

    var scaleX = graph_node.width/svg_node.width,
        scaleY = graph_node.height/svg_node.height,
        centerX = graph_coords.x + graph_node.width/2,
        centerY = graph_coords.y + graph_node.height; // NB!

    var origdims = [];
    Plotly.d3.selectAll("text.annotation-text").each(function(){
        origdims.push(parseInt(this.getBoundingClientRect().left));
    });

    svg_el.attr("transform", "translate("+(-centerX*(scaleX-1))+", "+(-centerY*(scaleY-1))+") scale("+scaleX+", "+scaleY+")");

    Plotly.d3.selectAll("g.annotation").each(function(d, i){
        Plotly.d3.select(this).attr("transform", "translate("+(-centerX*(scaleX-1))+", "+(-centerY*(scaleY-1))+") scale("+scaleX+", "+scaleY+") translate("+(-origdims[i]/1.25)+", 0) scale(1.75, 1)");
    });
    //console.log('Fixed SVG triangle!');
}

function is_integer(num){
    return num % 1 === 0;
}

function cartesian_to_ternary(x, y){
    // 1x1 Cartesian to the in-place equilateral triange
    var b = y / (Math.sqrt(3)/2),
        a = 1 - (x + (y/Math.sqrt(3))),
        c = 1 - a - b;
    return [a, b, c];
}

function inside_triangle(x,y,x1,y1,x2,y2,x3,y3){
    function fAB(x,y,x1,y1,x2,y2,x3,y3){
        return (y-y1)*(x2-x1) - (x-x1)*(y2-y1);
    }

    function fBC(x,y,x1,y1,x2,y2,x3,y3){
        return (y-y2)*(x3-x2) - (x-x2)*(y3-y2);
    }

    function fCA(x,y,x1,y1,x2,y2,x3,y3){
        return (y-y3)*(x1-x3) - (x-x3)*(y1-y3);
    }

    if (fAB(x,y,x1,y1,x2,y2,x3,y3)*fBC(x,y,x1,y1,x2,y2,x3,y3)>0 && fBC(x,y,x1,y1,x2,y2,x3,y3)*fCA(x,y,x1,y1,x2,y2,x3,y3)>0) return true;
    else return false;
}

function get_rect_pd_compound(comp, obj_left, obj_right){
    var formula = '',
        els = Object.keys(obj_left).sort(),
        coeff = 0;
    els.forEach(function(el){
        if (obj_right[el] == obj_left[el])
            formula += el + ' &times; ' + obj_left[el] + ', ';

        else if (obj_right[el] > obj_left[el]){
            coeff = comp * (obj_right[el] - obj_left[el]);
            coeff = Math.round(coeff * 100) / 100;
            if (!coeff) return;
            formula += el + ' &times; ' + coeff.toFixed(2) + ', ';

        } else {
            coeff = obj_left[el] - (comp * (obj_left[el] - obj_right[el]));
            coeff = Math.round(coeff * 100) / 100;
            if (!coeff) return;
            formula += el + ' &times; ' + coeff.toFixed(2) + ', ';
        }
    });
    return formula.substr(0, formula.length-2);
}

function get_tri_pd_compound(a, b, c, obj_a, obj_b, obj_c){
    var formula = '',
        els = Object.keys(obj_a).sort(),
        coeff = 0;
    els.forEach(function(el){
        coeff = Math.round((obj_a[el] * a + obj_b[el] * b + obj_c[el] * c) * 100) / 100;
        if (!coeff) return;
        formula += el + ' &times; ' + coeff.toFixed(2) + ', ';
    });
    return formula.substr(0, formula.length-2);
}

/**
 *
 * External control methods (iframe-API)
 *
 */

function matrix_order(x_value, y_value){
    if (!visavis.svg || !visavis.svgdim) return;
    if (!y_value) y_value = x_value;

    var x_arrange = Plotly.d3.scale.ordinal().rangeBands([0, visavis.svgdim]).domain(visavis.el_orders[x_value]),
        y_arrange = Plotly.d3.scale.ordinal().rangeBands([0, visavis.svgdim]).domain(visavis.el_orders[y_value]);

    Plotly.d3.selectAll("rect.visited").classed("visited", false);

    var t = visavis.svg.transition().duration(600);

    t.selectAll(".row")
        .delay(function(d, i){ return y_arrange(i); })
        .attr("transform", function(d, i){ return "translate(0," + y_arrange(i) + ")"; })
        .selectAll(".cell")
        .delay(function(d){ return x_arrange(d.x); })
        .attr("x", function(d){ return x_arrange(d.x); });

    t.selectAll(".column")
        .delay(function(d, i){ return x_arrange(i); })
        .attr("transform", function(d, i){ return "translate(" + x_arrange(i) + ")rotate(-90)"; });
}

function cube_order(x_value, y_value, z_value){
    visavis__plot3d(false, x_value, y_value, z_value);
}

function graph_rebuild(rel){
    show_preloader();
    visavis.force = null;
    var mapping = {'props': 'prel', 'aetypes': 'hrel', 'lattices': 'trel', 'articles': 'arel', 'geos': 'grel'};
    visavis.graph_default_rel = mapping[rel] || 'prel';
    visavis__graph();
}

function cmp_download(url, type){
    if (!visavis.cache || visavis.cache.type != type)
        return urge('Error: cannot compare datasets');

    call_ajax(url, function(cmp_data){

        reset_canvas();
        if (cmp_data && cmp_data.error) return urge(cmp_data.error);
        if (!cmp_data || !cmp_data.use_visavis_type) return urge('Error: unknown data format');
        if (cmp_data.warning) notify(cmp_data.warning);

        if (type == 'matrix'){
            visavis.nonformers_shown = false;

            // Prepare a master matrix for vis from ref and cmp
            var cpmatrix = JSON.parse(JSON.stringify(visavis.cache.ref));
            cmp_data.payload.links.forEach(function(item){
                item.cmp = true;
                cpmatrix.payload.links.push(item);
            });
            visavis__matrix(cpmatrix);
            set_cmp_legend(cmp_data.answerto, visavis.cache.ref.answerto);

        } else if (type == 'cube'){
            visavis.nonformers_shown = false;
            visavis.cache.cmp = {payload: {points: cmp_data.payload.points}};
            visavis__plot3d();
            set_cmp_legend(cmp_data.answerto, visavis.cache.ref.answerto);

        } else if (type == 'discovery'){
            visavis__discovery(cmp_data);
            set_cmp_legend(cmp_data.answerto, visavis.cache.ref.name);
        }
    });
}

function cmp_discard(type){
    if (!visavis.cache || visavis.cache.type != type || (type != 'matrix' && !visavis.cache.cmp))
        return notify('Cannot reset comparison');

    reset_canvas();

    if (type == 'matrix'){
        visavis__matrix(visavis.cache.ref);

    } else if (type == 'cube'){
        delete visavis.cache.cmp;
        visavis__plot3d();

    } else if (type == 'discovery'){
        var rerun = {payload: {points: visavis.cache.ref.points}, answerto: visavis.cache.ref.name};
        visavis.cache = null;
        visavis__discovery(rerun);
    }
}

function discovery_rerun(){
    if (!visavis.cache || visavis.cache.type != 'discovery' || !visavis.elementals || !visavis.elementals_on.length)
        return urge('Error #0002: this feature is not yet supported');

    reset_canvas();

    if (visavis.cache.cmp){
        visavis__discovery({payload: {points: visavis.cache.cmp.points}, answerto: visavis.cache.cmp.name});
        set_cmp_legend(visavis.cache.cmp.name, visavis.cache.ref.name);

    } else {
        var rerun = {payload: {points: visavis.cache.ref.points}, answerto: visavis.cache.ref.name};
        visavis.cache = null;
        visavis__discovery(rerun);
    }
}

function fixel_manage(status){
    visavis.fixel_shown = !!status;
    if (!visavis.fixel_shown) document.getElementById('fixel_do').checked = false;
}

/**
 *
 * I. Binaries matrix plot
 *
 */
function visavis__matrix(json){
    if (!visavis.cache || visavis.cache.type != 'matrix') visavis.cache = {ref: json, type: 'matrix'};

    visavis.svgdim = Math.min(document.body.clientWidth - document.body.clientWidth/12, document.body.clientHeight - document.body.clientHeight/12);

    var matrix = [],
        nodes = json.payload.nodes,
        minvalue = 1,
        maxvalue = 1,
        heatmap = false,
        actual_w = visavis.svgdim + visavis.svgmargin.left + visavis.svgmargin.right;

    visavis.svg = Plotly.d3.select("#visavis").append("svg")
        .attr("width", actual_w)
        .attr("height", visavis.svgdim + visavis.svgmargin.top + visavis.svgmargin.bottom)
        .style({"position": "absolute", "left": "50%", "font-size": "1.1vmin", "letter-spacing": "1px", "margin-left": -actual_w/2 + "px"})
        .append("g")
        .attr("transform", "translate(" + visavis.svgmargin.left + "," + visavis.svgmargin.top + ")");

    // compute index per node
    nodes.forEach(function(node, i){
        node.count = 0;
        matrix[i] = Plotly.d3.range(95).map(function(j){
            return {x: j, y: i, z: 0, cmt: "", cmp: false};
        });
    });

    // convert links to matrix, count character occurrences
    json.payload.links.forEach(function(link){
        matrix[link.source][link.target].z += link.value;
        matrix[link.target][link.source].z += link.value; // NB only AB-all
        matrix[link.source][link.target].cmt = link.cmt;
        matrix[link.target][link.source].cmt = link.cmt; // NB only AB-all
        matrix[link.source][link.target].cmp = link.cmp || false;
        matrix[link.target][link.source].cmp = link.cmp || false;
        nodes[link.source].count += link.value;
        nodes[link.target].count += link.value; // NB only AB-all

        if (link.value < minvalue) minvalue = link.value;
        else if (link.value > maxvalue) maxvalue = link.value;

        if (!heatmap && !is_integer(link.value)) heatmap = true;
        else if (link.cmp) heatmap = false;
    });

    if (visavis.nonformers_shown){
        visavis.pd_bin_nonformers.forEach(function(item){
            matrix[item[0]][item[1]].z = 1;
            matrix[item[1]][item[0]].z = 1; // NB only AB-all
            matrix[item[0]][item[1]].nonformer = true;
            matrix[item[1]][item[0]].nonformer = true; // NB only AB-all
        });
    }

    // precompute the orders
    ['num', 'nump', 'size', 'rea', 'rpp', 'rion', 'rcov', 'rmet', 'tmelt', 'eneg'].forEach(function(order){
        if (!visavis.el_orders[order])
            visavis.el_orders[order] = Plotly.d3.range(95).sort(function(a, b){ return nodes[a][order] - nodes[b][order]; });
    });
    visavis.el_orders.count = Plotly.d3.range(95).sort(function(a, b){ return nodes[b].count - nodes[a].count; });

    // set the default sort order (also in GUI logic: *rebuild_visavis* TODO)
    var arrange = Plotly.d3.scale.ordinal().rangeBands([0, visavis.svgdim]).domain(visavis.el_orders.nump);

    var setopac = heatmap ? function(){ return 1 } : Plotly.d3.scale.linear().domain([minvalue, maxvalue]).range([0.2, 1]).clamp(true);

    var heatmap_color = Plotly.d3.scale.linear().domain(Plotly.d3.range(0, 1, 1.0 / (visavis.heatcolors.length - 1))).range(visavis.heatcolors);
    var scale_color = Plotly.d3.scale.linear().domain([minvalue, maxvalue]).range([0, 1]);
    var setcolor = heatmap ? function(d, cmp){ return cmp ? '#c00' : heatmap_color(scale_color(d)) } : function(d, cmp){ return cmp ? '#c00' : '#3e3f95' };

    visavis.svg.html('<defs><pattern id="nonformer" patternUnits="userSpaceOnUse" width="4" height="4"><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" style="stroke:#ddd;stroke-width:1" /></pattern></defs>');

    visavis.svg.append("rect")
        .attr("class", "bgmatrix")
        .attr("width", visavis.svgdim)
        .attr("height", visavis.svgdim);

    var row = visavis.svg.selectAll(".row")
        .data(matrix)
        .enter().append("g")
        .attr("class", "row")
        .attr("transform", function(d, i){ return "translate(0," + arrange(i) + ")"; })
        .each(process);

    row.append("line")
        .attr("x2", visavis.svgdim);

    row.append("text")
        .attr("x", -6)
        .attr("y", arrange.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "end")
        .text(function(d, i){ return nodes[i].name; });

    var column = visavis.svg.selectAll(".column")
        .data(matrix)
        .enter().append("g")
        .attr("class", "column")
        .attr("transform", function(d, i){ return "translate(" + arrange(i) + ")rotate(-90)"; });

    column.append("line")
        .attr("x1", -visavis.svgdim);

    column.append("text")
        .attr("x", 6)
        .attr("y", arrange.rangeBand() / 2)
        .attr("dy", ".32em")
        .attr("text-anchor", "start")
        .text(function(d, i){ return nodes[i].name; });

    hide_preloader();
    hide_messages();
    if (heatmap) document.getElementById('heatmaplegend').style.display = 'block';
    if (visavis.mpds_embedded) document.getElementById('expander').style.display = 'block';

    document.getElementById('nonformers').style.display = 'block';
    document.getElementById('nonformers_shown').checked = visavis.nonformers_shown;

    if (visavis.fixel_shown) document.getElementById('fixel').style.display = 'block';

    function process(row){
        var cell = Plotly.d3.select(this).selectAll(".cell")
            .data(row.filter(function(d){ return d.z; }))
            .enter().append("rect")
            .attr("class", function(d){ return d.nonformer ? "nonformer cell" : "cell"; })
            .attr("id", function(d){ return "c_" + nodes[d.x].num.toString() + "_" + nodes[d.y].num.toString(); })
            .attr("x", function(d){ return arrange(d.x); })
            .attr("width", arrange.rangeBand())
            .attr("height", arrange.rangeBand())
            .style("fill-opacity", function(d){ return setopac(d.z); })
            .style("fill", function(d){ return setcolor(d.z, d.cmp); })
            .on("mouseover", mouseover)
            .on("mouseout", mouseout)
            .on("click", click_search)
            .append("svg:title").text(function(d){
                if (!d.cmt) return "";
                var capt = d.cmt + ": " + d.z;
                if (!heatmap) capt += " " + ((d.z == 1) ? "entry" : "entries");
                return capt;
            });
    }

    function mouseover(p){
        Plotly.d3.selectAll(".row text").classed("active", function(d, i){ return i == p.y; });
        Plotly.d3.selectAll(".column text").classed("active", function(d, i){ return i == p.x; });
    }

    function mouseout(){
        Plotly.d3.selectAll("text").classed("active", false);
    }

    function click_search(term){
        var ids = Plotly.d3.select(this).attr("id").substr(2).split("_");
        document.getElementById("c_" + ids[1] + "_" + ids[0]).classList.add('visited');
        document.getElementById("c_" + ids[0] + "_" + ids[1]).classList.add('visited');
        if (visavis.mpds_embedded){
            window.open(window.location.protocol + "//" + window.location.host + '#search/binary%20' + term.cmt);
        }
    }
}


/**
 *
 * II. Concept graph plot
 *
 */
function visavis__graph(json){
    var nodes = {},
        edges = [],
        labels = {},
        radii = {},
        foci = {},
        counter = 0;

    if (json){
        if (json.payload){
            visavis.cache = {ref: json.payload, type: 'graph'};
        }
        visavis.graph_default_rel = json.graph_rel || 'prel';
    }

    // filter edges and compute the distinct nodes from the links
    visavis.cache.ref.forEach(function(link){
        if (link.type == visavis.graph_default_rel){
            var lrep = {type: link.type};
            foci[link.source] = link.source.substr(0, 1); // setting default color
            lrep.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
            lrep.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
            edges.push(lrep);
            counter++;

        } else if (link.type == 'label'){
            labels[link.source] = link.target;

        } else if (link.type == 'radius'){
            if (link.target > 36) link.target = 36;
            radii[link.source] = link.target + 2;
        }
    });
    if (!counter) return urge('Warning: not enough data for analysis');

    var table = {},
        i = 0,
        circle_cls = visavis.graph_default_rel.substr(0, 1),
        text_cls = (counter > 25) ? "micro" : "macro";

    for (var p in nodes){
        table[p] = i++;
    }

    var width = document.body.clientWidth - 20,
        height = parseInt(0.8 * width);

    reset_canvas();

    var svg = Plotly.d3.select("#visavis").append("svg")
        .attr("width", width)
        .attr("height", height);

    visavis.force = Plotly.d3.layout.force()
        .size([width, height])
        .nodes(Plotly.d3.values(nodes))
        .links(edges)
        .linkDistance(90)
        .gravity(0.3)
        .charge(-2500)
        .on("tick", tick);

    var drag = visavis.force.drag()
        .on("dragstart", function(d){
            Plotly.d3.select(this).classed("fixed", d.fixed = true);
        });

    var path = svg.append("g").selectAll("path")
        .data(visavis.force.links())
        .enter().append("path")
        .attr("class", function(d){ return "edge " + d.type; });

    var circle = svg.append("g").selectAll("circle")
        .data(visavis.force.nodes())
        .enter().append("circle")
        .attr("r", function(d, i){ return radii[d.name] || 10 })
        .attr("id", function(d, i){ return "c_" + table[d.name] })
        .attr("class", function(d, i){ return foci[d.name] || circle_cls })
        .call(drag);

    var text = svg.append("g").selectAll("g")
        .data(visavis.force.nodes())
        .enter().append("g");

    // a copy of the text with a thick white stroke for legibility
    text.append("text")
        .attr("x", -20)
        .attr("y", -10)
        .attr("class", "shadow " + text_cls)
        .attr("id", function(d, i){ return "s_" + table[d.name] })
        .html(function(d){ return labels[d.name] });

    text.append("text")
        .attr("x", -20)
        .attr("y", -10)
        .attr("class", "captions " + text_cls)
        .attr("id", function(d, i){ return "t_" + table[d.name] })
        .html(function(d){ return labels[d.name] })
        .call(drag);

    text.on("click", function(d){
        if (visavis.mpds_embedded){
            var found_fct = visavis.graph_mapping[d.name.charAt(0)],
                value = labels[d.name];
            if (found_fct == 'codens') value = value.split("'")[0]; // FIXME years lost
            else if (found_fct == 'formulae') value = window.parent.WMCORE.termify_formulae(value.split(",")[0]);
            window.parent.location.hash = window.parent.wmgui.aug_search_cmd(found_fct, value);
        }
    });

    function tick(){
        path.attr("d", direct);
        circle.attr("transform", transform);
        text.attr("transform", transform);
    }

    function direct(d){
        return "M" + d.source.x + "," + d.source.y + " " + d.target.x + "," + d.target.y;
    }

    function transform(d){
        return "translate(" + d.x + "," + d.y + ")";
    }

    visavis.force.start();
    for (var i = 500; i > 0; i--) visavis.force.tick();
    visavis.force.stop();
    hide_preloader();
    hide_messages();
    warn_demo();
    if (visavis.mpds_embedded) document.getElementById('expander').style.display = 'block';
}


/**
 *
 * III. 3d-cube plot
 *
 */
function visavis__plot3d(json, x_sort, y_sort, z_sort){
    if (json){
        visavis.cache = {
            type: 'cube',
            ref: {
                payload: {tcube: true, points: json.payload.points},
                answerto: json.answerto
            }
        };

    } else {
        if (!visavis.cache || visavis.cache.type != 'cube')
            return urge('Error #0003: this feature is not yet supported');
        json = visavis.cache.ref;
    }

    var scene = {
            aspectmode: 'cube',
            xaxis: {
                title: json.payload.xtitle,
                type: 'linear',
                zeroline: false
            },
            yaxis: {
                title: json.payload.ytitle,
                type: 'linear',
                zeroline: false
            },
            zaxis: {
                title: json.payload.ztitle,
                type: 'linear',
                zeroline: false
            }
        },
        data = [],
        labels = [],
        heatmap = false,
        marker = {};

    if (!visavis.elementals) visavis.elementals = json.payload.elementals;
    if (!visavis.elementals.num) visavis.elementals.num = Plotly.d3.range(96);

    // precompute the orders
    ['num', 'nump', 'size', 'rea', 'rpp', 'rion', 'rcov', 'rmet', 'tmelt', 'eneg'].forEach(function(order){
        if (!visavis.el_orders[order])
            visavis.el_orders[order] = Plotly.d3.range(95).sort(function(a, b){ return visavis.elementals[order][a + 1] - visavis.elementals[order][b + 1]; });
    });

    // default sort order
    if (!x_sort) x_sort = 'nump';
    if (!y_sort) y_sort = 'nump';
    if (!z_sort) z_sort = 'nump';

    for (var i = 0; i < json.payload.points.v.length; i++){
        if (!is_integer(json.payload.points.v[i])){
            heatmap = true;
            break
        }
    }
    if (heatmap)
        marker = {color: json.payload.points.v, colorscale: 'Rainbow', size: 4, opacity: 0.9};
    else
        marker = {color: "#3e3f95", size: 4, opacity: 0.9};

    // main render data
    data.push({
        type: "scatter3d",
        x: convert_to_axis(json.payload.points.x, x_sort),
        y: convert_to_axis(json.payload.points.y, y_sort),
        z: convert_to_axis(json.payload.points.z, z_sort),
        text: json.payload.points.labels || labels,
        mode: "markers",
        hoverinfo: "text",
        marker: marker,
        projection: {x: {show: true, opacity: 0.05}, y: {show: true, opacity: 0.05}, z: {show: true, opacity: 0.05}}
    });

    if (visavis.nonformers_shown){
        data.push({
            type: "scatter3d",
            x: convert_to_axis(visavis.pd_tri_nonformers.x, x_sort),
            y: convert_to_axis(visavis.pd_tri_nonformers.y, y_sort),
            z: convert_to_axis(visavis.pd_tri_nonformers.z, z_sort),
            text: visavis.pd_tri_nonformers.labels,
            mode: "markers",
            hoverinfo: "text",
            marker: {color: "#ccc", size: 4, opacity: 0.9},
            projection: {x: {show: true, opacity: 0.25}, y: {show: true, opacity: 0.25}, z: {show: true, opacity: 0.25}}
        });
    }

    // cmp render data
    if (visavis.cache.type == 'cube' && visavis.cache.cmp){
        data[0].marker.color = "#3e3f95";
        data.push({
            type: "scatter3d",
            x: convert_to_axis(visavis.cache.cmp.payload.points.x, x_sort),
            y: convert_to_axis(visavis.cache.cmp.payload.points.y, y_sort),
            z: convert_to_axis(visavis.cache.cmp.payload.points.z, z_sort),
            text: visavis.cache.cmp.payload.points.labels || labels,
            mode: "markers",
            hoverinfo: "text",
            marker: {color: "#900", size: 4, opacity: 0.9},
            projection: {x: {show: true, opacity: 0.05}, y: {show: true, opacity: 0.05}, z: {show: true, opacity: 0.05}}
        });
    }

    // mesh mode render data
    if (!json.payload.meshes) json.payload.meshes = [];
    for (var i = 0; i < json.payload.meshes.length; i++){
        data.push({
            type: "mesh3d",
            x: shake(json.payload.meshes[i].x),
            y: shake(json.payload.meshes[i].y),
            z: json.payload.meshes[i].z,
            alphahull: 1,
            opacity: 0.075,
            color: visavis.colorset[i] || "#000",
            hoverinfo: "none"
        });
    }

    if (json.payload.tcube){ // NB visavis vs. clusters demo
        scene = {
            aspectmode: 'cube',
            xaxis: {
                range: [1, 95],
                titlefont: {color:'#fff'},
                tickfont: {size: 11},
                backgroundcolor: '#fbfbfb',
                gridcolor: '#fff',
                showbackground: true,
                showline: false,
                ticktext: order_els(x_sort).slice(0, 95).filter(function(el, idx){ return idx % 2 === 0 }),
                tickvals: Plotly.d3.range(1, 96, 2)
            },
            yaxis: {
                range: [1, 95],
                titlefont: {color:'#fff'},
                tickfont: {size: 11},
                backgroundcolor: '#f6f6f6',
                gridcolor: '#fff',
                showbackground: true,
                showline: false,
                ticktext: order_els(y_sort).slice(0, 95).filter(function(el, idx){ return idx % 2 === 0 }),
                tickvals: Plotly.d3.range(1, 96, 2)
            },
            zaxis: {
                range: [1, 95],
                titlefont: {color:'#fff'},
                tickfont: {size: 11},
                backgroundcolor: '#eee',
                gridcolor: '#fff',
                showbackground: true,
                showline: false,
                ticktext: order_els(z_sort).slice(0, 95).filter(function(el, idx){ return idx % 2 === 0 }),
                tickvals: Plotly.d3.range(1, 96, 2)
            },
            camera: {projection: {type: 'orthographic'}}
        }
    }

    run(
        data,
        {
            font: {family: "Exo2"},
            showlegend: false,
            scene: scene,
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0,
                pad: 0
            }
        },
        {displaylogo: false, displayModeBar: false, staticPlot: false},
        function(){
            window.addEventListener("mousewheel", function(event){ event.stopPropagation(); }, true); // FIXME memory leak?
            window.addEventListener("DOMMouseScroll", function(event){ event.stopPropagation(); }, true); // FIXME memory leak?
            document.querySelector('#scene svg').addEventListener('click', function(event){ // FIXME memory leak?
                if (visavis.mpds_embedded && event.target.tagName == 'text' && event.target.classList.contains('nums')){
                    window.open(window.location.protocol + "//" + window.location.host + '#search/ternary%20' + event.target.textContent);
                }
            });
            warn_demo();
            if (heatmap) document.getElementById('heatmaplegend').style.display = 'block';
            if (visavis.mpds_embedded) document.getElementById('expander').style.display = 'block';

            document.getElementById('nonformers').style.display = 'block';
            document.getElementById('nonformers_shown').checked = visavis.nonformers_shown;

            if (visavis.fixel_shown) document.getElementById('fixel').style.display = 'block';
        }
    );
}


/**
 *
 * IV. Basic piechart plot
 *
 */
function visavis__pie(json){
    if (!json.total_count || json.total_count == 1) return urge('Warning: not enough data for analysis');

    var data = [],
        classes = [],
        recent_facet = false,
        tot_count = 0,
        loc_count = 0,
        enter_metrics = json.total_count/150,
        annotations = [],
        annotations_layout = {showarrow: false, font: {size: 13, family: "Exo2"}, borderpad: 0, bgcolor: '#fff'},
        label = '',
        xy_domains = [
            null,
            [[[0, 1],    [0.03, 1]]],
            [[[0, 0.49], [0,    1]],   [[0.51, 1],    [0,    1]]],
            [[[0, 0.49], [0.53, 1]],   [[0.51, 1],    [0.53, 1]],   [[0, 0.49], [0.03, 0.49]]],
            [[[0, 0.49], [0.53, 1]],   [[0.51, 1],    [0.53, 1]],   [[0, 0.49], [0.03, 0.49]],   [[0.51, 1], [0.03, 0.49]]],
            [[[0, 0.32], [0.51, 1]],   [[0.33, 0.66], [0.51, 1]],   [[0.67, 1], [0.51, 1]],      [[0, 0.32], [0, 0.49]],      [[0.33, 0.66], [0, 0.49]]],
            [[[0, 0.32], [0.51, 1]],   [[0.33, 0.66], [0.51, 1]],   [[0.67, 1], [0.51, 1]],      [[0, 0.32], [0, 0.49]],      [[0.33, 0.66], [0, 0.49]],      [[0.67, 1], [0, 0.49]]],
            [[[0, 0.32], [0.68, 1]],   [[0.33, 0.66], [0.68, 1]],   [[0.67, 1], [0.68, 1]],      [[0, 0.32], [0.34, 0.65]],   [[0.33, 0.66], [0.34, 0.65]],   [[0.67, 1], [0.34, 0.65]], [[0, 0.32], [0.02, 0.31]]],
            [[[0, 0.32], [0.68, 1]],   [[0.33, 0.66], [0.68, 1]],   [[0.67, 1], [0.68, 1]],      [[0, 0.32], [0.34, 0.65]],   [[0.33, 0.66], [0.34, 0.65]],   [[0.67, 1], [0.34, 0.65]], [[0, 0.32], [0.02, 0.31]], [[0.33, 0.66], [0.02, 0.31]]]
        ];

    // get tot_count
    for (var i = 0; i < json.payload.length; i++){
        if (json.payload[i].count < enter_metrics || json.payload[i].count > (json.total_count - enter_metrics)) continue;

        if (json.payload[i].facet == "classes") tot_count++;
        else {
            if (json.payload[i].facet != recent_facet) tot_count++;
            recent_facet = json.payload[i].facet;
        }
    }

    if (!tot_count) return urge('Warning: not enough data for analysis');
    recent_facet = false;

    for (var i = 0; i < json.payload.length; i++){
        if (json.payload[i].count < enter_metrics || json.payload[i].count > (json.total_count - enter_metrics)) continue;

        // special case of interlacing classes
        if (json.payload[i].facet == "classes"){
            classes.push({
                type: "pie",
                name: visavis.facet_names[json.payload[i].facet],
                values: [json.payload[i].count, json.total_count - json.payload[i].count],
                text: [json.payload[i].value, "other classes"],
                domain: {x: xy_domains[tot_count][loc_count][0], y: xy_domains[tot_count][loc_count][1]},
                hoverinfo: "text+percent+name",
                textinfo: "text+percent",
                textposition: "inside",
                hole: 0.3/tot_count,
                marker: {colors: visavis.colorset}
            });
            label = visavis.facet_names[json.payload[i].facet] + ' distribution';
            label = 'Fig. ' + (loc_count+1) + '. ' + label.charAt(0).toUpperCase() + label.slice(1);
            annotations.push(Object.assign({text: label}, locate_label(xy_domains[tot_count][loc_count]), annotations_layout));
            loc_count++;
            continue;
        }

        // other facets
        if (json.payload[i].facet != recent_facet){
            if (recent_facet){
                // rest of data, not loaded
                var sum = data[data.length - 1].values.reduce(function(a, b){ return a + b }, 0);
                if (sum < json.total_count){
                    data[data.length - 1].values.push(json.total_count - sum);
                    data[data.length - 1].text.push("other " + visavis.facet_names[recent_facet]);
                }
            }
            if (loc_count > 8) break;
            data.push({
                type: "pie",
                name: visavis.facet_names[json.payload[i].facet],
                values: [],
                text: [],
                domain: {x: xy_domains[tot_count][loc_count][0], y: xy_domains[tot_count][loc_count][1]},
                hoverinfo: "text+percent+name",
                textinfo: "text+percent",
                textposition: "inside",
                hole: 0.3/tot_count,
                marker: {colors: visavis.colorset}
            });
            label = visavis.facet_names[json.payload[i].facet] + ' distribution';
            label = 'Fig. ' + (loc_count+1) + '. ' + label.charAt(0).toUpperCase() + label.slice(1);
            annotations.push(Object.assign({text: label}, locate_label(xy_domains[tot_count][loc_count]), annotations_layout));
            loc_count++;
        }

        recent_facet = json.payload[i].facet;
        data[data.length - 1].values.push(json.payload[i].count);
        data[data.length - 1].text.push(json.payload[i].value);
    }
    if (data.length){
        // NB FIXME once again: rest of data, not loaded
        var sum = data[data.length - 1].values.reduce(function(a, b){ return a + b }, 0);
        if (sum < json.total_count){
            data[data.length - 1].values.push(json.total_count - sum);
            data[data.length - 1].text.push("other " + visavis.facet_names[recent_facet]);
        }
    }
    if (classes) data.extend(classes);
    run(
        data,
        {height: document.body.clientHeight, width: document.body.clientWidth, showlegend: false, font: {family: "Exo2"}, annotations: annotations},
        {displaylogo: false, displayModeBar: false, staticPlot: true},
        function(){
            warn_demo();
            if (visavis.mpds_embedded) document.getElementById('expander').style.display = 'block';

            Plotly.d3.selectAll('g.slice').on({'click': function(evt){
                var value = evt.text.split('<br')[0];
                if (evt.trace){ // NB trace may or may not be available in Plotly event
                    var name = evt.trace.name,
                        found_fct = null;
                    if (visavis.evtfuse) value = visavis.evtbuff;
                    else if (value.indexOf('other ') > -1) return;
                    visavis.evtfuse = 0;
                    for (var p in visavis.facet_names){
                        if (visavis.facet_names[p] == name) found_fct = p;
                    }
                    if (!found_fct) return;
                    if (found_fct == 'elements') value = value.replace(/,\s/g, '-'); // FIXME?
                    if (visavis.mpds_embedded) window.parent.location.hash = window.parent.wmgui.aug_search_cmd(found_fct, value);
                } else {
                    if (value.indexOf('other ') > -1) return;
                    if (visavis.evtfuse > 1) return;
                    visavis.evtfuse = visavis.evtfuse ? visavis.evtfuse + 1 : 1;
                    visavis.evtbuff = value;
                    var reevt = document.createEvent('Event');
                    reevt.initEvent('click', false, true);
                    Plotly.d3.select(this.parentNode.firstChild).node().dispatchEvent(reevt);
                }
            }});
        }
    );
}


/**
 *
 * V. Occurence (stockade) plot
 *
 */
function visavis__bar(json){
    var payload = [{type: "bar", x: json.payload.x, y: json.payload.y, marker: {color: "#3e3f95"}, name: json.payload.name}],
        callback = function(){
            warn_demo();
            if (visavis.mpds_embedded) document.getElementById('expander').style.display = 'block';

            Plotly.d3.selectAll('g.point').on({'mouseover': function(){
                Plotly.d3.select(this).style({'cursor': 'pointer'}).select('path').style({'fill': '#E36868'});

            }, 'mouseout': function(){
                Plotly.d3.select(this).style({'cursor': 'default'}).select('path').style({'fill': '#3e3f95'});

            }}).on({'click': function(evt){
                if (visavis.mpds_embedded){
                    window.parent.wmgui.visavis_terminating = true;
                    window.parent.location.hash = window.parent.wmgui.aug_search_cmd("years", evt.x);
                }
            }});
        };
    if (json.payload2 && json.payload2.x && json.payload2.y){
        payload.push({type: "bar", x: json.payload2.x, y: json.payload2.y, marker: {color: "#e36868"}, name: json.payload2.name});
        callback = function(){};
    }
    run(
        payload,
        {
            height: document.body.clientHeight,
            width: document.body.clientWidth,
            showlegend: json.payload2 ? true : false,
            legend: {x: 0, y: 1, font: {family: "Exo2", size: 17}},
            xaxis: {
                autorange: true,
                showgrid: false,
                showline: true,
                showticklabels: true,
                zeroline: false,
                ticklen: 4,
                dtick: json.payload.dx || 0.05,
                title: json.payload.xtitle
                //rangemode: "nonnegative"
            },
            yaxis: {
                fixedrange: true,
                autorange: true,
                showgrid: true,
                showline: false,
                showticklabels: true,
                ticklen: 0,
                title: json.payload.ytitle,
                rangemode: "nonnegative",
                type: "log", tickfont: {family: "Exo2", size: 17}
            },
            font: {family: "Exo2", size: 13}
        },
        {displaylogo: false, displayModeBar: false, staticPlot: true}, callback
    );
}


/**
 *
 * VI-A. Scatter plot for pVT-data
 *
 */
function visavis__scatter(json){
    try {
        var array = json.sample.measurement[0].property.matrix;
    } catch (e){
        return notify('Cannot get plot data, please, try again');
    }
    var dataset = [],
        p_data = array.map(function(item){ return item[0] }),
        p_data_sum = p_data.reduce(function(a, b){ return a + b }, 0),
        t_data = array.map(function(item){ return item[1] }),
        t_data_sum = t_data.reduce(function(a, b){ return a + b }, 0),
        x_data = t_data,
        x_title = 'T, K',
        y_comment = '';

    if (Math.abs(t_data[0] - t_data_sum/t_data.length) < 0.1 && Math.abs(p_data[0] - p_data_sum/p_data.length) > 0.1){
        // pressure
        x_title = 'P, GPa';
        x_data = p_data;

    } else if (Math.abs(t_data[0] - t_data_sum/t_data.length) > 0.1 && Math.abs(p_data[0] - p_data_sum/p_data.length) > 0.1){
        // pressure and temperature
        return notify('Sorry, plotting both temperature and pressure is not yet supported');
    }

    if (array[0][2] == array[0][3] && array[0][3] == array[0][4]){
        // cubic
        dataset = [
            {
                type: "scatter",
                mode: "markers",
                name: "a",
                x: x_data,
                y: array.map(function(item){ return item[2] }),
                marker: {color: "#3e3f95", symbol: "square", size: 8}
            }
        ];
    } else if (array[0][2] == array[0][3] && array[0][3] != array[0][4]){
        // tetragonal, hexagonal, trigonal
        var delta_a = array[0][4] - array[0][2];
        y_comment = ' (diff.)';
        dataset = [
            {
                type: "scatter",
                mode: "markers",
                name: "a",
                x: x_data,
                y: array.map(function(item){ return item[2] }),
                marker: {color: "#3e3f95", symbol: "square", size: 8}
            }, {
                type: "scatter",
                mode: "markers",
                name: "b",
                x: x_data,
                y: array.map(function(item){ return item[4] - delta_a }),
                marker: {color: "#E36868", symbol: "circle", size: 7}
            }
        ];
    } else {
        // orthorhombic, monoclinic, triclinic
        var delta_a = array[0][4] - array[0][2],
            delta_b = array[0][3] - array[0][2];
        y_comment = ' (diff.)';
        dataset = [
            {
                type: "scatter",
                mode: "markers",
                name: "a",
                x: x_data,
                y: array.map(function(item){ return item[2] }),
                marker: {color: "#3e3f95", symbol: "square", size: 8}
            }, {
                type: "scatter",
                mode: "markers",
                name: "b",
                x: x_data,
                y: array.map(function(item){ return item[3] - delta_b }),
                marker: {color: "#E36868", symbol: "circle", size: 7}
            }, {
                type: "scatter",
                mode: "markers",
                name: "c",
                x: x_data,
                y: array.map(function(item){ return item[4] - delta_a }),
                marker: {color: "#acc2b3", symbol: "diamond", size: 7}
            }
        ];
    }
    run(
        dataset,
        {
            height: document.body.clientHeight,
            width: document.body.clientWidth,
            showlegend: true,
            legend: {x: 100, y: 1, font: {family: "Exo2", size: 14}},
            xaxis: {
                autorange: true,
                showgrid: true,
                showline: true,
                showticklabels: true,
                zeroline: false,
                ticklen: 4,
                title: x_title
            },
            yaxis: {
                autorange: true,
                showgrid: true,
                showline: true,
                showticklabels: true,
                zeroline: false,
                ticklen: 4,
                title: 'Cell parameters' + y_comment + ', A'
            },
            font: {family: "Exo2", size: 13}
        },
        {displaylogo: false, displayModeBar: false, staticPlot: true},
        function(){
            if (visavis.mpds_embedded) document.getElementById('cross').style.display = 'block';
        }
    );
}


/**
 *
 * VI-B. Scatter plot for ab initio DOS and bands data
 *
 */
function visavis__eigenplot(json){
    try {
        var array = json.sample.measurement[0].property.matrix;
    } catch (e){
        return notify('Cannot get plot data, please, try again');
    }
    var dataset = [];
    if (array.bands){
        // bands
        var x_labels = [];
        for (var i = 0; i < array.kpoints.length; i++){
            x_labels.push( (array.kpoints[i][0] == 0 && array.kpoints[i][1] == 0 && array.kpoints[i][2] == 0) ? 'Г' : '' );
        }
        for (var i = 0; i < array.bands.length; i++){
            dataset.push({
                x: Plotly.d3.range(array.bands[i].length),
                y: array.bands[i],
                mode: "lines",
                type: "scatter",
                marker: {color: "#000"}
            });
        };
        var x_title = 'k',
            y_title = 'E - E<sub>F</sub>, eV',
            xaxis = {
                showgrid: false,
                showline: true,
                zeroline: false,
                tickmode: 'array',
                tickvals: Plotly.d3.range(array.kpoints.length),
                ticktext: x_labels,
                tickfont: {size: 20}
            };
    } else if (array.dos){
        // dos
        dataset.push({
            x: array.levels,
            y: array.dos,
            mode: "lines",
            type: "scatter",
            marker: {color: "#000"}
        });
        var x_title = 'E - E<sub>F</sub>, eV',
            y_title = 'Total density of states',
            xaxis = {
                autorange: true,
                showgrid: true,
                showline: true,
                showticklabels: true,
                zeroline: false,
                ticklen: 4,
                title: x_title
            };
    }
    run(
        dataset,
        {
            height: document.body.clientHeight,
            width: document.body.clientWidth,
            showlegend: false,
            xaxis: xaxis,
            yaxis: {
                autorange: true,
                showgrid: false,
                showline: true,
                showticklabels: true,
                zeroline: true,
                zerolinecolor: '#6cf',
                zerolinewidth: 3,
                ticklen: 4,
                title: y_title
            },
            font: {family: "Exo2", size: 13}
        },
        {displaylogo: false, displayModeBar: false, staticPlot: true},
        function(){
            if (visavis.mpds_embedded) document.getElementById('cross').style.display = 'block';
        }
    );
}


/**
 *
 * VII. SVG CUSTOMIZED RENDERING, for C-entries, i.e. phase diagrams
 *
 */
function visavis__pd(json){
    if (!json.shapes || !json.entry) return urge('Error: server response was not understood');
    document.title = json.entry;

    var layout_shapes = [],
        counter = 0;

    for (var i = 0; i < json.shapes.length; i++){

        if (json.shapes[i].kind == 'phase'){
            layout_shapes.push({
                type: 'path',
                path: json.shapes[i].svgpath,
                fillcolor: get_pd_filling(json.shapes[i].nphases),
                line: {width: 0.2}
            });
            if (json.shapes[i].is_solid === false && json.shapes[i].nphases == 1) layout_shapes[layout_shapes.length - 1].fillcolor = '#9cf';
            //else if (json.shapes[i].is_ordered === false) layout_shapes[layout_shapes.length - 1].fillcolor = '#cbf';

        } else if (json.shapes[i].kind == 'compound'){
            layout_shapes.push({
                type: 'path',
                path: json.shapes[i].svgpath,
                line: {width: 2.5, color: '#d1cde6'}
            });
            //if (json.shapes[i].is_ordered === false) layout_shapes[layout_shapes.length - 1].line.color = '#cbf';

        } else {
            layout_shapes.push({
                type: 'path',
                path: json.shapes[i].svgpath,
                line: {width: 0.5, color: '#666'},
                fillOpacity: 0
            });
        }
        visavis.pd_phases[counter] = json.shapes[i].reflabel;
        counter++;
    }

    if (json.naxes == 3){ // triangle
        var pd_datamock = [{a: [], b: [], c: [], type: 'scatterternary'}], layout = {
            font: {
                size: 20,
                color: '#333',
                family: "Exo2"
            },
            ternary: {
                aaxis: {
                    title: json.title_b,
                    ticks: '',
                    showline: true,
                    showgrid: false,
                    fixedrange: true,
                    linewidth: 1
                },
                baxis: {
                    title: json.title_a,
                    ticks: '',
                    showline: true,
                    showgrid: false,
                    fixedrange: true,
                    linewidth: 1
                },
                caxis: {
                    title: json.title_c,
                    ticks: '',
                    showline: true,
                    showgrid: false,
                    fixedrange: true,
                    linewidth: 1
                }
            },
            shapes: layout_shapes,
            annotations: []
        };

        layout_shapes.unshift({
            type: 'path',
            path: 'M 0,0 L 0.5,0.866 L 1,0', // chassis: a path for preventing triangle transformation errors
            line: {width: 0}
        });

    } else { // rectangle
        var pd_datamock = [
            {x: [], y: [], type: 'scatter', xaxis: 'x', yaxis: 'y'},
            {x: [], y: [], type: 'scatter', xaxis: 'x2', yaxis: 'y2'}
        ], layout = {
            font: {
                size: 16,
                color: '#333',
                family: "Exo2"
            },
            xaxis: {
                title: "at. %",
                range: json.comp_range, // NB demo treatment
                fixedrange: true,
                showticks: json.labels.length ? true : false,
                showline: true,
                zeroline: false,
                showgrid: false,
                ticklen: 4,
                tickfont: { size: 12 },
                hoverformat: '.2r'
            },
            xaxis2: {
                range: json.comp_range, // NB demo treatment
                fixedrange: true,
                showticks: json.labels.length ? true : false,
                showline: true,
                zeroline: false,
                showgrid: false,
                ticklen: 4,
                tickfont: { size: 12 },
                side: "top",
                overlaying: 'x'
            },
            yaxis: {
                title: "T, &deg;C",
                range: json.temp,
                fixedrange: true,
                showticks: json.labels.length ? true : false,
                showline: true,
                zeroline: false,
                showgrid: false,
                ticklen: 4,
                tickfont: { size: 12 },
                hoverformat: '.2r'
            },
            yaxis2: {
                range: json.temp,
                fixedrange: true,
                showticks: json.labels.length ? true : false,
                showline: true,
                zeroline: false,
                showgrid: false,
                ticklen: 4,
                tickfont: { size: 12 },
                side: "right",
                overlaying: 'y'
            },
            shapes: layout_shapes,
            annotations: []
        };
    }

    for (var i = 0; i < json.labels.length; i++){
        layout.annotations.push({
            x: json.labels[i][1][0],
            y: json.labels[i][1][1],
            text: json.labels[i][0],
            showarrow: false,
            font: {size: 15, family: "Exo2"},
            textangle: (json.labels[i][0].replace(/<\/?sub>/g, "").length > 10) ? -65 : 0
        });
    }
    if (json.title_c && json.arity > 2) layout.annotations.push({text: (json.diatype ? json.diatype + " " : "") + (json.temp[0] ? json.temp[0] + " &deg;C" : ""), x: -0.25, y: 0.96, showarrow: false, xref: 'paper', yref: 'paper', font: {size: 15, family: "Exo2"}});
    if (json.naxes == 2) layout.annotations.extend([{text: json.title_a, x: -0.03, y: -0.12, showarrow: false, xref: 'paper', yref: 'paper', font: {size: 20, family: "Exo2"}}, {text: json.title_b, x: 1.03, y: -0.12, showarrow: false, xref: 'paper', yref: 'paper', font: {size: 20, family: "Exo2"}}])

    run(pd_datamock, layout, {displaylogo: false, displayModeBar: false, staticPlot: true},
    function(){

        var canvas = document.getElementById('visavis');
        if (json.naxes == 3){
            // triangle
            pd_fix_triangle();

        } else {
            // rectangle
            var xaxis = canvas._fullLayout.xaxis,
                yaxis = canvas._fullLayout.yaxis,
                margin_l = canvas._fullLayout.margin.l,
                margin_t = canvas._fullLayout.margin.t;
        }

        if (visavis.mpds_embedded)
            document.getElementById('cross').style.display = 'block';

        warn_demo();
        if (visavis.mpds_embedded && window.parent.wmgui.sid)
            document.getElementById('switcher').style.display = 'block';

        // skip unsupported PD types
        if (json.diatype && json.diatype.indexOf('projection') !== -1) return;
        //console.log(visavis.pd_phases)

        Plotly.d3.selectAll('path').on({'mouseover': function(){
            var that = Plotly.d3.select(this),
                idx = that.attr('data-index');
            if (json.naxes == 3){
                if (idx == 0) return false;
                idx--;
            }
            that.attr('data-state', that.style('fill'));
            that.style({'cursor': 'pointer', 'fill': '#3e3f95'});

            if (visavis.pd_phases[idx] !== undefined && json.labels[visavis.pd_phases[idx]] !== undefined){
                Plotly.d3.select('g.annotation[data-index="' + visavis.pd_phases[idx] + '"]').select('text').style('fill', '#f30');
            }

        }, 'mouseout': function(){
            var that = Plotly.d3.select(this),
                state = that.attr('data-state');
            if (state){
                that.style({'fill': state, 'cursor': 'default'});
                Plotly.d3.selectAll('g.annotation').select('text').style('fill', '#000');
            }

        }, 'click': function(){
            var idx = Plotly.d3.select(this).attr('data-index');
            if (json.naxes == 3) idx--;
            if (json.shapes[idx].phase_id){
                window.open(window.location.protocol + "//" + window.location.host + '#phase_id/' + json.shapes[idx].phase_id);
            }
        }});

        // skip pd tracing for demo
        if (!json.comp_start && !json.comp_a) return;

        if (json.naxes == 3){
            // triangle
            var svg_el = Plotly.d3.select("g.layer-above"),
                domrect = svg_el[0][0].getBoundingClientRect(),
                origin_a = [domrect.x, domrect.y + domrect.height],
                origin_b = [domrect.x + domrect.width/2, domrect.y],
                origin_c = [domrect.x + domrect.width, domrect.y + domrect.height];

            canvas.addEventListener('mousemove', function(evt){
                //console.log(['x: ' + evt.x, 'y : ' + evt.y].join(' and '));
                if (inside_triangle(evt.x, evt.y, origin_a[0], origin_a[1], origin_b[0], origin_b[1], origin_c[0], origin_c[1])){
                    var x0 = (evt.x - domrect.x)/domrect.width,
                        y0 = Math.sqrt(3)/2 * (1 - (evt.y - domrect.y)/domrect.height),
                        triangle = cartesian_to_ternary(x0, y0);
                    //console.log(['x ' + x0, 'y ' + y0].join(', '));
                    document.getElementById('pdtracer').innerHTML = get_tri_pd_compound(triangle[0], triangle[1], triangle[2], json.comp_a, json.comp_b, json.comp_c);
                    document.getElementById('pdtracer').style.display = 'block';
                } else document.getElementById('pdtracer').style.display = 'none';
            });
        } else {
            // rectangle
            var temp_only = (json.comp_range[1] - json.comp_range[0] !== 100);

            canvas.addEventListener('mousemove', function(evt){
                var comp = xaxis.p2c(evt.x - margin_l),
                    temp = parseInt(yaxis.p2c(evt.y - margin_t));
                if (comp > json.comp_range[0] && comp < json.comp_range[1] && temp > json.temp[0] && temp < json.temp[1]){
                    //console.log(['x: ' + comp, 'y : ' + temp].join(' and '));
                    if (temp_only)
                        document.getElementById('pdtracer').innerHTML = 'T = ' + temp + ' &deg;C';
                    else
                        document.getElementById('pdtracer').innerHTML = get_rect_pd_compound((comp - json.comp_range[0]) / (json.comp_range[1] - json.comp_range[0]), json.comp_start, json.comp_end) + ' at T = ' + temp + ' &deg;C';
                    document.getElementById('pdtracer').style.display = 'block';
                } else document.getElementById('pdtracer').style.display = 'none';
            });
        }
    });
}


/**
 *
 * VIII. DISCOVERY
 *
 */
function visavis__discovery(json){

    if (!visavis.elementals)
        visavis.elementals = json.payload.elementals;
    if (!visavis.elementals.num)
        visavis.elementals.num = Plotly.d3.range(96);
    if (!visavis.elementals_on.length){
        // default axes
        visavis.elementals_on.push('nump');
    }

    if (visavis.cache && visavis.cache.type == 'discovery'){
        var ref = {points: visavis.cache.ref.points, name: visavis.cache.ref.name},
            cmp = {points: json.payload.points, name: json.answerto};
        visavis.cache.cmp = cmp;

    } else {
        var ref = {points: json.payload.points, name: json.answerto},
            cmp = false;
        visavis.cache = {ref: ref, type: 'discovery'};
    }

    var result = discover(ref, cmp);
    if (!result || !result[0].discovery) return;

    var traces = [];

    for (var i = 0; i < result.length; i++){
        var dscolor = (i == 0) ? '#3e3f95' : '#900',
            oflag = (i == 0) ? 1 : 0.9;
        traces.push({
            x: result[i].discovery.map(function(item){ return item[0] }),
            y: result[i].discovery.map(function(item){ return item[1] }),
            text: result[i].labels,
            mode: 'markers',
            type: 'scatter',
            hoverinfo: 'text',
            marker: {size: 6, color: dscolor, opacity: oflag, symbol: 'square'}
        });
    }

    run(
        traces, {
            showlegend: false,
            hovermode: "closest",
            xaxis: {showgrid: false},
            yaxis: {showgrid: false},
            margin: {
                l: 0,
                r: 0,
                b: 0,
                t: 0,
                pad: 0
            },
            annotations: [
                {x: 0.63, y: 0.97, xref: 'paper', yref: 'paper', xanchor: 'right', yanchor: 'bottom', text: '<i>Second Principal Component (a<sub>1</sub>x + b<sub>1</sub>y + c<sub>1</sub>z + ...)</i>', showarrow: false, bgcolor: '#fff', font: {family: "Exo2", size: 14}},
                {x: 0.97, y: 0.67, xref: 'paper', yref: 'paper', xanchor: 'left', yanchor: 'top', text: '<i>First Principal Component (a<sub>2</sub>x + b<sub>2</sub>y + c<sub>2</sub>z + ...)</i>', showarrow: false, bgcolor: '#fff', textangle: 270, font: {family: "Exo2", size: 14}}
            ]
        }, {displaylogo: false, displayModeBar: false, staticPlot: false},
        function(){
            if (visavis.mpds_embedded)
                document.getElementById('expander').style.display = 'block';
            else
                return;

            Plotly.d3.select('#visavis').on('click', function(evt){
                if (visavis.cache.type != 'discovery') return false;

                evt = evt || window.event;
                var node = evt.target,
                    index = 0;
                if (node.tagName != 'path' || node.getAttribute('class') != 'point') return false;

                var oflag = node.style.opacity;
                node.style.fill = '#0f0';
                while ((node = node.previousElementSibling)){
                    index++;
                }
                var label = [],
                    point = (oflag == 1) ? visavis.cache.ref.points[index] : visavis.cache.cmp.points[index];
                if (!point) return false;

                point.forEach(function(i){
                    label.push(visavis.chem_els[i]);
                });
                label = label.filter(function(x){ return x }).join('-');
                window.open(window.location.protocol + "//" + window.location.host + window.parent.wmgui.aug_search_cmd("elements", label));
            });
        }
    );
}

/**
 *
 * IX. Custom heatmap
 *
 */
function visavis__heatmap(json){
    if (json.odet){
        var data_x = json.payload.x,
            data_y = json.payload.y,
            data_z = json.payload.z;
    } else {
        var dice = Math.floor(Math.random() * 100) % 3;
        if (dice === 0){
            var data_x = json.payload.x,
                data_y = json.payload.y,
                data_z = json.payload.z;
        } else if (dice === 1){
            var data_x = json.payload.x,
                data_y = json.payload.z,
                data_z = json.payload.y;
        } else {
            var data_x = json.payload.y,
                data_y = json.payload.z,
                data_z = json.payload.x;
        }
    }
    run(
        [
        {
            type: "scatter",
            mode: "markers",
            hoverinfo: "text",
            x: data_x,
            y: data_y,
            text: json.payload.labels || Array(data_x.length).fill('Point'),
            marker: {color: data_z, colorscale: 'Rainbow', size: 4, opacity: 0.9}
        },
        {x: [], y: [], type: 'scatter', xaxis: 'x', yaxis: 'y'},
        {x: [], y: [], type: 'scatter', xaxis: 'x2', yaxis: 'y2'}
        ],
        {
            height: document.body.clientHeight,
            width: document.body.clientWidth,
            showlegend: false,
            hovermode: "closest",
            xaxis: {
                autorange: true,
                showgrid: false,
                showline: true, //false,
                zeroline: false, //true,
                showticklabels: false
            },
            xaxis2: {
                autorange: true,
                showgrid: false,
                showline: true, //false,
                zeroline: false, //true,
                showticklabels: false,
                side: "top",
                overlaying: 'x'
            },
            yaxis: {
                autorange: true,
                showgrid: false,
                showline: true, //false,
                zeroline: false, //true,
                showticklabels: false
            },
            yaxis2: {
                autorange: true,
                showgrid: false,
                showline: true, //false,
                zeroline: false, //true,
                showticklabels: false,
                side: "right",
                overlaying: 'y'
            }
        },
        {displaylogo: false, displayModeBar: false, staticPlot: false}
    );
}

/**
 *
 * COMMON DOM ATTACHMENT
 *
 */
(function(){
    window.addEventListener('hashchange', init_download, false);

    if (visavis.local_supported){
        window.addEventListener('dragover', handleDragOver, false);
        window.addEventListener('drop', handleFileSelect, false);

        var fileapi = document.getElementById('fileapi'),
            reader = new FileReader();
        fileapi.onchange = function(){
            if (!this.files[0] || !this.files[0].size)
                return notify('Error: file cannot be read (unaccessible?)');

            show_preloader();
            reader.currentFilename = this.files[0].name;
            reader.readAsText(this.files[0]);
        }
        reader.onloadend = function(evt){
            initialize(evt.target.result, true);
        }
    }

    document.getElementById('expander').onclick = function(){
        var add_qs = (visavis.graph_default_rel == 'prel') ? '' : '&graph_rel=' + visavis.graph_default_rel;
        window.parent.location = window.location + add_qs;
    }

    document.getElementById('switcher').onclick = function(){
        if (document.location.hash){
            var pic_url = document.location.hash.substr(1);
            window.location = '/pd_stub.html#' + pic_url.replace('fmt=json', 'fmt=png');
        }
    }

    document.getElementById('nonformers_shown').onchange = function(){
        visavis.nonformers_shown = visavis.nonformers_shown ? false : true;
        reset_canvas();

        if (visavis.cache.type == 'matrix')
            visavis__matrix(visavis.cache.ref);
        else if (visavis.cache.type == 'cube')
            visavis__plot3d(visavis.cache.ref);
        else
            return urge('Warning: unsupported plot type');

        if (visavis.mpds_embedded)
            window.parent.rebuild_visavis();
    }

    document.getElementById('fixel_do').onchange = function(){
        if (window.location.hash.indexOf('fixel=1') == -1)
            window.location.hash += '&fixel=1';
        else
            window.history.go(-1);
    }

    if (visavis.mpds_embedded){
        window.parent.wmgui.visavis_ready = true;

        document.getElementById('cross').onclick = function(){
            window.parent.close_vibox();
        }

        if (window.parent.wmgui.visavis_starting)
            window.parent.start_visavis();

        else if (document.location.hash.length)
            init_download();

    } else {

        if (document.location.hash.length)
            init_download();

        else
            display_landing();
    }
})();
