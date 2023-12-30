namespace $.$$ {

	const Point = $mol_data_array( $mol_data_number )

	const Payload = $mol_data_record({
		points: $mol_data_array( Point ),
	})

	const Discover_item = $mol_data_record({
		points: $mol_data_array( Point ),
		name: $mol_data_string
	})

	type Element_prop = keyof ReturnType<typeof $mpds_visavis_elements_list.prop_names>

	export const $mpds_visavis_plot_discovery_json = $mol_data_record({
		use_visavis_type: $mol_data_const( 'discovery' ),
		payload: Payload,
		answerto: $mol_data_string,
	})

	function discover(
		elementals_on: Element_prop[], 
		first: typeof Discover_item.Value, 
		second?: typeof Discover_item.Value
	) {
		if (!$mpds_visavis_lib_pca) return $mol_fail( new $mol_data_error('Sorry, your web-browser is too old for this task') );
	
		// if (!first.points.length || (second && !second.points.length)) return urge('Error: not enough data for analysis');
		// ^ this will be validated in Discover_item()

		let	given_separation = 0;
		// given_separation = false;

		const elements_data = ( element_ids: readonly number[] ) => {
			const prop_array: number[] = []
			const label_parts: string[] = []

			element_ids.forEach( element_num => {
				const props = elementals_on.map( 
					prop_name => $mpds_visavis_elements_list.element_by_num( element_num )[ prop_name ]
				)
				const name = $mpds_visavis_elements_list.element_by_num( element_num ).name
				prop_array.push( ...props )
				if ( element_num != 0 ) label_parts.push( name );
			})
			const label = label_parts.join('-')
			return { prop_array, label }
		}

		const to_predict: number[][] = []
		const labels: string[] = []

		first.points.forEach( element_ids => {
			const { prop_array, label } = elements_data( element_ids )

			to_predict.push( prop_array );
			labels.push( label );
		})
	
		if (second){
			given_separation = to_predict.length;

			second.points.forEach( element_ids => {
				const { prop_array, label } = elements_data( element_ids )
	
				// discard points in the *second* that are already in the *first*
				if (!labels.includes( label )) {
					to_predict.push( prop_array );
					labels.push( label );
				}
			})

			if (to_predict.length == given_separation) {
				return $mol_fail( new $mol_data_error('Error: a selected dataset is fully included into a reference dataset') )
			}
		}
	
		if (to_predict.length > 21000) return $mol_fail( new $mol_data_error('Error: too much data for analysis') )
	
		const pca = new $mpds_visavis_lib_pca( to_predict )
		const predicted = pca.predict( to_predict, {nComponents: 2} );
	
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

	export class $mpds_visavis_plot_discovery extends $.$mpds_visavis_plot_discovery {

		sub() {
			return [ 
				this.Plot(), 
				...( this.json_cmp() ? [ this.Cmp_legend() ] : [] ),
				...( this.show_setup() ? [ this.Setup() ] : [] ),
			]
		}

		json() {
			return $mpds_visavis_plot_discovery_json( this.plot_raw().json() as any )
		}

		elementals_dict() {
			return $mpds_visavis_elements_list.prop_names()
		}

		@ $mol_mem
		auto() { 
			return super.auto()
		}

		@ $mol_mem
		subscribe_click() {
			const plotly_root = this.Plotly_root()
			if (! plotly_root ) return

			plotly_root.addEventListener('click', ( event: MouseEvent ) => {
				
				const node = event.target as HTMLElement
				if (node.getAttribute('class') != 'point') return false;
				
				node.classList.add('visited')

				const point = $mpds_visavis_lib_plotly.d3.select(node)
				const label = point.data()[0].tx

				this.discovery_click( { label } )
			});
		}

		@ $mol_mem
		layout() {
			return {
				font: { 
					family: 'inherit' 
				},
				showlegend: false,
				hovermode: "closest",
				xaxis: { showgrid: false },
				yaxis: { showgrid: false },
				margin: {
					l: 0,
					r: 0,
					b: 0,
					t: 0,
					pad: 0
				},
				annotations: [
					{ 
						x: 0.63, 
						y: 0.97, 
						xref: 'paper', 
						yref: 'paper', 
						xanchor: 'right', 
						yanchor: 'bottom', 
						text: '<i>Second Principal Component (a<sub>1</sub>x + b<sub>1</sub>y + c<sub>1</sub>z + ...)</i>', 
						showarrow: false, 
						bgcolor: '#fff', 
						font: {
							size: 14,
						},
					},
					{ 
						x: 0.97, 
						y: 0.67, 
						xref: 'paper', 
						yref: 'paper', 
						xanchor: 'left', 
						yanchor: 'top', 
						text: '<i>First Principal Component (a<sub>2</sub>x + b<sub>2</sub>y + c<sub>2</sub>z + ...)</i>', 
						showarrow: false, 
						bgcolor: '#fff', 
						textangle: 270, 
						font: {
							size: 14,
						},
					}
				]
			}
		}

		@ $mol_mem
		elementals_on(next?: any) {
			if ( next !== undefined ) return next as never

			const elementals_on: Element_prop[] = []

			Object.keys( this.elementals_dict() ).forEach( key => {
				if (this.elemental_checked(key)) {
					elementals_on.push( key as Element_prop)
				}
			} )

			if (elementals_on.length === 0) return $mol_fail( new $mol_data_error('At least one property must be enabled') )

			return elementals_on
		}
		
		@ $mol_mem_key
		elemental_checked(id: any, next?: any) {
			if ( next !== undefined ) return next as never
			return id === 'nump' ? true : false //nump on by default
		}

		@ $mol_mem
		data() {
		
			const json = this.json()
			const json_cmp = this.json_cmp() ? $mpds_visavis_plot_discovery_json( this.json_cmp() ) : null

			const elementals_on = this.elementals_on()

			const first = Discover_item({points: json.payload.points, name: json.answerto})

			const second = json_cmp ? Discover_item({points: json_cmp.payload.points, name: json_cmp.answerto}) : undefined

			const result = discover(elementals_on, first, second)
		
			const traces = [];
		
			for (let i = 0; i < result.length; i++){
				const dscolor = this.colorset()[ i ]
				const oflag = (i == 0) ? 1 : 0.9
				traces.push({
					x: result[i].discovery.map((item: any) => item[0] ),
					y: result[i].discovery.map((item: any) => item[1] ),
					text: result[i].labels,
					mode: 'markers',
					type: 'scatter',
					hoverinfo: 'text',
					marker: {size: 6, color: dscolor, opacity: oflag, symbol: 'square'}
				});
			}

			return traces
		}

		@ $mol_mem
		cmp_labels() {
			return this.json_cmp() ? [ this.json().answerto, this.json_cmp().answerto ] : []
		}

	}
	
}
