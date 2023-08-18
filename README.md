Vis-à-vis web-viewer for scientific plots in chemistry and physics
==========

Standalone and self-contained HTML5 widget, based on the D3 and Plotly libs and written in [$mol](https://github.com/hyoo-ru) hyper-reactive micromodular UI framework.

Supports the following plot types (see `examples` folder):

- `bar`
- `cube`
- `scatter` and `customscatter`
- `discovery`
- `eigenplot`
- `graph`
- `heatmap`
- `matrix`
- `phase diagram`
- `pie`


All the plot types must conform the specs:

```
{
    "use_visavis_type": "SUPPORTED_TYPE",
    "error": "ERROR_OR_NULL",
    "payload": {
        "VARIOUS_FIELDS": "VARIOUS_CONTENT"
    }
}
```

As a part of the [MPDS desktop GUI](https://github.com/mpds-io/ermac), being used in an **iframe**, tries to access the `window.parent` and `window.parent.wmgui`, as well as the methods therein.


### Requirements

- `node -v >= 15`
- `npm -v >= 7`


## Installation and development

One command to install [MAM](https://github.com/hyoo-ru/mam), node modules, and build dev server from actual sources:
```bash
npm exec mam@latest mpds/visavis
```
Start dev server:
```bash
npm start
```

## Building

Build standalone application at `mpds/visavis/app/-`:
```bash
npm start mpds/visavis/app
```
[Build mpds-visavis-plot Web Component](https://github.com/mpds-io/visavis/blob/master/plot/readme.md)

## Sources file layout

`app` - the main **$mol** app

`elements` - elemental properties and constants

`examples` - supported data samples, see also **plots** on [MPDS platform](https://mpds.io/#plot/matrix/inquiry/formulae=TiO2)

`lib` - external libraries

`plot` - plot types implementations

`plotly` - Plotly library embedding description


## License

MIT &copy; by HYOO Guild ([Pavel Zubkov](https://github.com/PavelZubkov), [standonarise](https://github.com/stan-donarise), and [Dmitriy Karlovskiy](https://github.com/nin-jin)) and Tilde Materials Informatics ([Evgeny Blokhin](https://github.com/blokhin))
