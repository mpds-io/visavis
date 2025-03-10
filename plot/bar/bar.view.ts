namespace $.$$ {

	const Payload = $mol_data_record({
		x: $mol_data_array( $mol_data_number ),
		dx: $mol_data_number,
		y: $mol_data_array( $mol_data_number ),
		xtitle: $mol_data_optional( $mol_data_string ),
		ytitle: $mol_data_optional( $mol_data_string ),
	})

	export const $mpds_visavis_plot_bar_json = $mol_data_record({
		payload: Payload,
		payload2: $mol_data_optional( Payload ),
	})

	export class $mpds_visavis_plot_bar extends $.$mpds_visavis_plot_bar {

		json() {
			return $mpds_visavis_plot_bar_json( this.plot_raw().jsons()[0] )
		}

		@ $mol_mem
		subscribe_click() {
			const plotly_root = this.Plotly_root()
			if (! plotly_root ) return

			const json = this.json() as any

			if (json.payload2 && json.p1ayload2.x && json.payload2.y) return
			
			const paths = $mpds_visavis_lib_plotly.d3.select( plotly_root ).selectAll( 'g.point path' )

			const that = this
			paths.on('click', function(this: any, event: MouseEvent){
				const selection = $mpds_visavis_lib_plotly.d3.select(this)
				const value = selection.data()[0].x
				that.bar_click( { facet: "years", value } )
			});
		}

		@ $mol_mem
		layout() {
			const json = this.json()
			return {
				showlegend: json.payload2 ? true : false,
				legend: {
					x: 0,
					y: 1,
					font: {
						size: 17,
					},
				},
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
					type: "log", 
					tickfont: {
						size: 17,
					},
				},
				font: {
					family: 'inherit',
					size: 13,
				}
			}
		}

		@ $mol_mem
		data() {
		
			const json = this.json()

			const payload = [ { type: "bar", x: json.payload.x, y: json.payload.y, name: 'bar' } ]
			
			if (json.payload2 && json.payload2.x && json.payload2.y){
				payload.push( { type: "bar", x: json.payload2.x, y: json.payload2.y, name: 'bar' } );
			}

			return payload	
		}
		
	}
	
}
