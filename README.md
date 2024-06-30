Web-viewer for plots in materials science, chemistry, and physics
==========

**Vis-à-vis** is a standalone and self-contained HTML5 widget, written in the `$mol` framework and based on the D3 and Plotly libs.

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


All the plot types being visualized must conform the following spec:

```
{
    "use_visavis_type": "SUPPORTED_TYPE",
    "error": "ERROR_OR_NULL",
    "payload": {
        "VARIOUS_FIELDS": "VARIOUS_CONTENT"
    }
}
```

This is currently supported by various [MPDS](https://mpds.io) online products.


**Vis-à-vis** exists in two realizations: standalone application called `app` and embeddable web component called `plot`.


### Requirements

- `node -v >= 15`
- `npm -v >= 7`


## Development

Note that, unlike many other frontend frameworks, `$mol` provides the same single environment for all its projects, under the standard namespace scheme. That is, all your `$mol`-based code lives inside some directory `$MOL_HOME`. So if you don't have `$MOL_HOME` yet, create it and navigate there:

```bash
mkdir $MOL_HOME && cd $MOL_HOME
```

Run `$mol` MAM server (MAM stands for the `$mol` abstract modules) inside your `$MOL_HOME`:

```bash
npm exec mam
```

Use a link to run the standalone **Vis-à-vis** application `app` with the hot reload support: http://localhost:9080/mpds/visavis/app/-/test.html

See also the [mpds-visavis-plot web component description](https://github.com/mpds-io/visavis/blob/master/plot/README.md).


## Building

Build the standalone application `app` at `mpds/visavis/app/-` using:

```bash
npm exec mam mpds/visavis/app
```

Build the embeddable web component `plot` at `mpds/visavis/plot/-/web.js` using:

```bash
npm exec mam mpds/visavis/plot
```


## Sources file layout

`app` - the main `$mol` app

`elements` - **Vis-à-vis** elemental properties and constants

`examples` - **Vis-à-vis** supported data samples, see also **plots** on [MPDS platform](https://mpds.io/#plot/matrix/inquiry/formulae=TiO2)

`lib` - external libraries bundled

`plot` - plot types + embeddable web component implementation

`plotly` - Plotly library embedding description


## License

MIT &copy; by HYOO Guild ([Pavel Zubkov](https://github.com/PavelZubkov), [standonarise](https://github.com/stan-donarise), and [Dmitriy Karlovskiy](https://github.com/nin-jin)) and Tilde Materials Informatics ([Evgeny Blokhin](https://github.com/blokhin))
