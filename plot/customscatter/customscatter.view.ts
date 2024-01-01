namespace $.$$ {

	export const $mpds_visavis_plot_customscatter_json = $mol_data_record({
		plots: $mol_data_array(
			$mol_data_record( {
				name: $mol_data_string,
				type: $mol_data_string,
				mode: $mol_data_string,
				interpolation: $mol_data_string,
				x: $mol_data_array( $mol_data_number ),
				y: $mol_data_array( $mol_data_number ),
			} )
		),
		xtitle: $mol_data_optional( $mol_data_string ),
		ytitle: $mol_data_optional( $mol_data_string ),
		xlog: $mol_data_nullable( $mol_data_boolean ),
		ylog: $mol_data_nullable( $mol_data_boolean ),
		xrpd: $mol_data_optional( $mol_data_boolean ),
	})

	export class $mpds_visavis_plot_customscatter extends $.$mpds_visavis_plot_customscatter {

		json() {
			return $mpds_visavis_plot_customscatter_json( this.plot_raw().json() as any )
		}

		@ $mol_mem
		subscribe_legend_click() {
			const plotly_root = this.Plotly_root()
			if (! plotly_root ) return
			
			const legends = $mpds_visavis_lib_plotly.d3.select( plotly_root ).selectAll('.legendtoggle')
			// plotly_root.on('plotly_legendclick', (event: any)=> {
			legends.on('click', (data: any) => {
				const trace = data[0].trace

				this.legend_click( { plotindex: trace.index, name: trace.name } )
			})
		}

		@ $mol_mem
		nplots() {
			const n = this.json().plots.length

			this.nplots_changed( n )
			
			return n
		}


		@ $mol_mem
		layout() {
			const json = this.json()
			return {
				showlegend: !json.xrpd,
				annotations: json.xrpd ? [{
					x: 3,
					y: 100,
					xref: 'x',
					yref: 'y',
					text: 'simulated Cu K-alpha',
					showarrow: false
				}] : false,
				legend: {
					x: 100,
					y: 1,
					font: {
						size: 14,
					},
				},
				xaxis: {
					type: json.xlog ? 'log' : '-',
					autorange: true,
					showgrid: true,
					showline: true,
					showticklabels: true,
					zeroline: true,
					zerolinecolor: '#999',
					zerolinewidth: 0.5,
					ticklen: 4,
					title: json.xtitle
				},
				yaxis: {
					type: json.ylog ? 'log' : '-',
					autorange: true,
					showgrid: !json.xrpd,
					showline: !json.xrpd,
					showticklabels: !json.xrpd,
					zeroline: true,
					zerolinecolor: '#999',
					zerolinewidth: 0.5,
					ticklen: json.xrpd ? 0 : 4,
					title: json.ytitle
				},
				font: { 
					family: 'inherit', 
					size: 13,
				},
				margin: {
					t: 0,
					r: json.xrpd ? 20 : 0,
				}
			}
		}

		@ $mol_mem
		data() {
			const json = this.json()

			return json.plots
		}

	}
	
}
