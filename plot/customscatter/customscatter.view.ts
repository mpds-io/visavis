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
	})

	export class $mpds_visavis_plot_customscatter extends $.$mpds_visavis_plot_customscatter {

		json() {
			return $mpds_visavis_plot_customscatter_json( this.plot_raw().json() as any )
		}

		@ $mol_action
		subscribe_events() {
            // // document.getElementById('visavis').on('plotly_legendclick', function(){ return false }); // requires at least v1.37
            // // yet another iframe communication API for mpds-labs via postMessage
            // // API CORRECT
            // if (window.parent) window.parent.postMessage({type: 'nplots', nplots: json.plots.length}, '*');
		}

		@ $mol_mem
		layout() {
			const json = this.json()
			return {
				showlegend: true,
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
					showgrid: true,
					showline: true,
					showticklabels: true,
					zeroline: true,
					zerolinecolor: '#999',
					zerolinewidth: 0.5,
					ticklen: 4,
					title: json.ytitle
				},
				font: { 
					family: 'inherit', 
					size: 13,
				},
				margin: {
					t: 0,
					r: 0
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
