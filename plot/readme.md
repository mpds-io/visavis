# $mpds_visavis_plot

Plot displaying component.
Can be used as [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components).

## Building

```bash
npm exec mam@latest mpds/visavis/plot
```
The module bundle will be at `mpds/visavis/plot/-/web.js`

## Web Component usage example
When you import the module, the web component is automatically registered, so you can use the html tag:
```html
<mpds-visavis-plot></mpds-visavis-plot>
```
Use `view` property of the DOM element to control `$mpds_visavis_plot` $mol component instance:
```js
const visavis_plot = document.getElementsByTagName( 'mpds-visavis-plot' )[ 0 ].view

visavis_plot.json_request( 'https://jsonplaceholder.typicode.com/todos/1' )

visavis_plot.notify = ( msg )=> alert( msg )
```

## Properties

**`json_request( next?: string ) : string`**

Request url to get json (plot data)

**`notify( msg: string ) : void`**

Called inside component for display notification

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
