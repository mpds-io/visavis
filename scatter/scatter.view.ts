namespace $.$$ {

	export const $visavis_scatter_json = $mol_data_record( {
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
					matrix: $mol_data_array( $mol_data_array( $mol_data_number ) ),
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
	export class $visavis_scatter extends $.$visavis_scatter {

		json() {
			// notify('Cannot get plot data, please, try again');
			return $visavis_scatter_json( this.plot_raw().json() as any )
		}

		@ $mol_action
		subscribe_events() {
            // if (visavis.mpds_embedded) document.getElementById('cross').style.display = 'block';
		}

		@ $mol_mem
		p_data() {
			return this.json().sample.measurement[0].property.matrix.map( item => item[0] )
		}

		@ $mol_mem
		t_data() {
			return this.json().sample.measurement[0].property.matrix.map( item => item[1] )
		}

		@ $mol_mem
		p_data_sum() {
			return this.p_data().reduce( (a, b) => a + b, 0 )
		}

		@ $mol_mem
		t_data_sum() {
			return this.t_data().reduce( (a, b) => a + b, 0 )
		}

		@ $mol_mem
		x_data_type() {
			const p_data = this.p_data()
			const p_data_sum = this.p_data_sum()
			const t_data = this.t_data()
			const t_data_sum = this.t_data_sum()
			if (Math.abs(t_data[0] - t_data_sum/t_data.length) < 0.1 && Math.abs(p_data[0] - p_data_sum/p_data.length) > 0.1){
				return 'pressure'
			} else if (Math.abs(t_data[0] - t_data_sum/t_data.length) > 0.1 && Math.abs(p_data[0] - p_data_sum/p_data.length) > 0.1){
				return $mol_fail( new $mol_data_error('Sorry, plotting both temperature and pressure is not yet supported') )
				// return 'pressure and temperature'
			} else {
				return 'temperature'
			}
		}

		@ $mol_mem
		x_data() {
			switch (this.x_data_type()) {
				case 'pressure':
					return this.p_data()
				case 'temperature':
					return this.t_data()
			}
		}

		@ $mol_mem
		x_title() {
			const dict = {
				'pressure': 'P, Gpa',
				'temperature': 'T, K',
			} as const

			return dict[ this.x_data_type() ]
		}

		@ $mol_mem
		data() {
			const json = this.json()

			const x_data = this.x_data()
		
			const array = json.sample.measurement[0].property.matrix;
			if (array[0][2] == array[0][3] && array[0][3] == array[0][4]){
				// cubic
				return [
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
				const delta_a = array[0][4] - array[0][2];
				return [
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
				const delta_a = array[0][4] - array[0][2]
				const delta_b = array[0][3] - array[0][2]
				return [
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
		}

		@ $mol_mem
		layout() {

			const array = this.json().sample.measurement[0].property.matrix;
			let y_comment = '';
			if (array[0][2] == array[0][3] && array[0][3] == array[0][4]){
				// cubic
			} else if (array[0][2] == array[0][3] && array[0][3] != array[0][4]){
				// tetragonal, hexagonal, trigonal
				y_comment = ' (diff.)';
			} else {
				// orthorhombic, monoclinic, triclinic
				y_comment = ' (diff.)';
			}

			return {
				showlegend: true,
				legend: {x: 100, y: 1, font: {family: "Exo2", size: 14}},
				xaxis: {
					autorange: true,
					showgrid: true,
					showline: true,
					showticklabels: true,
					zeroline: false,
					ticklen: 4,
					title: this.x_title()
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
			}
		}

	}
	
}
