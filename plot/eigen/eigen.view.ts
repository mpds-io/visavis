namespace $.$$ {

	const Bands_matrix = $mol_data_record({
		bands: $mol_data_array( $mol_data_array( $mol_data_number ) ),
		kpoints: $mol_data_array( $mol_data_array( $mol_data_number ) ),
	})
	type Bands_matrix = ReturnType<typeof Bands_matrix>

	const Dos_matrix = $mol_data_record({
		dos: $mol_data_array( $mol_data_number ),
		levels: $mol_data_array( $mol_data_number ),
	})
	type Dos_matrix = ReturnType<typeof Dos_matrix>

	export const $mpds_visavis_plot_eigen_json = $mol_data_record( {
		sample: $mol_data_record( {
			material: $mol_data_record( {
				chemical_formula: $mol_data_string,
				chemical_elements: $mol_data_array( $mol_data_string ),
				condition: $mol_data_array( $mol_data_record( {
					scalar: $mol_data_array( $mol_data_record( { value: $mol_data_number } ) ),
					name: $mol_data_string,
					units: $mol_data_optional( $mol_data_string ),
				}) ),
				phase: $mol_data_string,
				phase_id: $mol_data_number,
				entry: $mol_data_string,
				object_repr: $mol_data_optional( $mol_data_string),
			}),
			measurement: $mol_data_array( $mol_data_record( {
				data_type: $mol_data_string, //enum: ["peer_reviewed", "machine_learning", "ab_initio"]
				property: $mol_data_record( {
					units: $mol_data_string,
					scalar: $mol_data_optional( $mol_data_variant( $mol_data_string, $mol_data_number ) ),
					matrix: $mol_data_variant(
						Bands_matrix,
						Dos_matrix,
					),
					name: $mol_data_string,
					category: $mol_data_string,
					domain: $mol_data_string,
				}),
				condition: $mol_data_optional( $mol_data_array( $mol_data_record( {
					units: $mol_data_string,
					scalar: $mol_data_number,
					// range: {},
					name: $mol_data_string,
					refers_to: $mol_data_optional( $mol_data_string ),
				} ) ) ),
				raw_data: $mol_data_optional( $mol_data_string ),
			}) ),
		}),
		version: $mol_data_string,
		object_type: $mol_data_string,
		reference: $mol_data_record( {
			entry: $mol_data_string,
			phase: $mol_data_optional( $mol_data_string ),
		}),
	})

	export class $mpds_visavis_plot_eigen extends $.$mpds_visavis_plot_eigen {

		json() {
			return $mpds_visavis_plot_eigen_json( this.plot_raw().jsons()[0] )
		}

		@ $mol_mem
		bands_matrix(): Bands_matrix | null {
			const matrix = this.json().sample.measurement[0].property.matrix as Bands_matrix;
			if (matrix.bands){
				return matrix
			} else {
				return null
			}
		}

		@ $mol_mem
		dos_matrix(): Dos_matrix | null {
			const matrix = this.json().sample.measurement[0].property.matrix as Dos_matrix;
			if (matrix.dos){
				return matrix
			} else {
				return null
			}
		}

		@ $mol_mem
		data() {
			const dataset = [];

			const bands_matrix = this.bands_matrix()
			const dos_matrix = this.dos_matrix()

			if (bands_matrix){
				for (let i = 0; i < bands_matrix.bands.length; i++){
					dataset.push({
						x: $mpds_visavis_lib_plotly.d3.range(bands_matrix.bands[i].length),
						y: bands_matrix.bands[i],
						mode: "lines",
						type: "scatter",
						marker: {color: "#000"}
					});
				};
			} else if (dos_matrix) {
				dataset.push({
					x: dos_matrix.levels,
					y: dos_matrix.dos,
					mode: "lines",
					type: "scatter",
					marker: {color: "#000"}
				});
			} else {
				// return notify('Cannot get plot data, please, try again');
				// ^ it will be validated id $mpds_visavis_plot_eigen_json()
			}

			return dataset	
		}

		@ $mol_mem
		layout() {

			const bands_matrix = this.bands_matrix()

			let xaxis: Object = {}
			let x_title = ''
			let y_title = ''

			if (bands_matrix){
				const x_labels = [];
				for (let i = 0; i < bands_matrix.kpoints.length; i++){
					x_labels.push( (bands_matrix.kpoints[i][0] == 0 && bands_matrix.kpoints[i][1] == 0 && bands_matrix.kpoints[i][2] == 0) ? 'Г' : '' );
				}
				x_title = 'k'
				y_title = 'E - E<sub>F</sub>, eV'
				xaxis = {
					showline: true,
					zeroline: false,
					showgrid: false,
					tickmode: 'array',
					tickvals: $mpds_visavis_lib_plotly.d3.range(bands_matrix.kpoints.length),
					ticktext: x_labels,
					tickfont: {
						size: 20,
					},
				};
			} else {
				x_title = 'E - E<sub>F</sub>, eV'
				y_title = 'Total density of states'
				xaxis = {
					showline: true,
					zeroline: false,
					showgrid: true,
					autorange: true,
					showticklabels: true,
					ticklen: 4,
					title: x_title
				};
			}

			return {
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
				font: {
					family: 'inherit',
					size: 13,
				},
			}
		}

	}
	
}
