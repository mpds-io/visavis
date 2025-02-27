# `$mpds_visavis_plot`

This is the plot displaying component, which can be used as a [web component](https://developer.mozilla.org/en-US/docs/Web/Web_Components).


## Building

```bash
npm exec mam@latest mpds/visavis/plot
```

The module bundle will be in `mpds/visavis/plot/-/web.js`


## Web component usage example

When you import the module, the web component is automatically registered, so you can use the html tag:

```html
<mpds-visavis-plot></mpds-visavis-plot>
```

Use `view` property of the DOM element to control the `$mpds_visavis_plot` component instance:

```js
const visavis_plot = document.getElementsByTagName( 'mpds-visavis-plot' )[ 0 ].view

visavis_plot.json_request( 'https://raw.githubusercontent.com/mpds-io/visavis/master/examples/bar_sci_literature.json' )

visavis_plot.notify = ( msg ) => alert( msg )
```


## API

**`json_request( next?: string ) : string`**

Request URL to get JSON (plot data)

**`json_cmp_request( next?: string | null ) : string | null`**

Second request URL to get JSON for comparison (matrix, cube and discovery plots)

**`multi_requests( next?: string[] ) : string[]`**

Multiple request URLs to get JSON for comparison (matrix and cube plots)

**`jsons( next?: any[] ) : any[]`**

JSON plot datasets

**`notify( msg: string ) : void`**

Called inside the component for display notification

**`matrix_click( { cmt: string } ) : void`**

Called when a matrix element is clicked

**`bar_click( { facet: string, value: string } ) : void`**

Called when a bar is clicked

**`pie_click( { facet: string, value: string } ) : void`**

Called when a pie slice is clicked

**`graph_click( { facet: string, label: string } ) : void`**

Called when a graph node title is clicked

**`discovery_click( { label: string } ) : void`**

Called when a discovery element is clicked

**`cube_click( { label: string } ) : void`**

Called when a cube element is clicked

**`phase_click( { cmt: string } ) : void`**

Called when a phase section is clicked

**`nplots_changed( n: number ) : void`**

Called when the number of customscatter plots changes

**`legend_click( { plotindex: number, name: string } ) : void`**

Called when the curve legend is clicked (customscatter)

**`matrix_x_sort( next?: string ) : string`**

Element property name that determines the order of matrix elements along the x-axis

**`matrix_y_sort( next?: string ) : string`**

Element property name that determines the order of matrix elements along the y-axis

**`x_sort( next?: string ) : string`**

Element property name that determines the order of elements along the x-axis

**`y_sort( next?: string ) : string`**

Element property name that determines the order of elements along the y-axis

**`z_sort( next?: string ) : string`**

Element property name that determines the order of elements along the z-axis

**`matrix_x_op( next?: string ) : string`**

(sum, diff, product, ratio, max, min)

**`matrix_y_op( next?: string ) : string`**

(sum, diff, product, ratio, max, min)

**`x_op( next?: string ) : string`**

(sum, diff, product, ratio, max, min)

**`y_op( next?: string ) : string`**

(sum, diff, product, ratio, max, min)

**`z_op( next?: string ) : string`**

(sum, diff, product, ratio, max, min)

**`cube_fixel_checked( next?: boolean ) : boolean`**

Set to true to fix element

**`matrix_fixel_checked( next?: boolean ) : boolean`**

Set to false to unfix element

**`on_fixel_checked( next ) : void`**

Called when a fixel is changed

**`graph_rel( next?: string ) : string`**

**`discovery_elementals_on( next?: string[] ) : string[]`**
