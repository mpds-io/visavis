namespace $.$$ {

	const Facet_names = {props: 'properties', elements: 'elements', classes: 'classes', lattices: 'crystal systems'} as const

	export const $mpds_visavis_plot_pie_json = $mol_data_record( {
		payload: $mol_data_array( $mol_data_record( {
			facet: $mol_data_enum( 'facet', {props: 'props', elements: 'elements', classes: 'classes', lattices: 'lattices'} as const ),
			value: $mol_data_string,
			count: $mol_data_number,
		} ) ),
		total_count: $mol_data_number,
	})


	// Get pre-define coordinates for piechart labels (FIXME?)
	function locate_label(values: number[][]){
		let x = 0
		let y = 0
		const left = values[0]
		const top = values[1]

		if (left[0] == 0 && left[1] == 0.32) x = 0.08;
		else if (left[0] == 0.67 && left[1] == 1) x = 0.92;
		else if (left[0] == 0 && left[1] == 0.49) x = 0.17;
		else if (left[0] == 0.51 && left[1] == 1) x = 0.83;
		else x = left.reduce(function(a, b){ return a + b }, 0)/2; // avg

		y = top[0];
		if (y <= 0.03) y = 0;
		else if (y == 0.34) y = 0.318;
		else if (y == 0.53) y = 0.51;

		return {x: x, y: y};
	}

	export class $mpds_visavis_plot_pie extends $.$mpds_visavis_plot_pie {

		json() {
			return $mpds_visavis_plot_pie_json( this.plot_raw().json() as any )
		}

		@ $mol_action
		subscribe_events() {
			// warn_demo();
			// if (visavis.mpds_embedded) document.getElementById('expander').style.display = 'block';
			
			const d3 = $mpds_visavis_lib.d3()

			const slices = d3.select( this.dom_node_actual() ).selectAll('g.slice path')

			const facet_names: Record<string, string> = {props: 'properties', elements: 'elements', classes: 'classes', lattices: 'crystal systems'}; //global const?

			const that = this
			slices.on('click', function(this: any, event: MouseEvent){
				const slice = d3.select(this).data()[0]
				const trace = d3.select(this.parentNode.parentNode).data()[0][0].trace

				let value = slice.text.split('<br')[0];
				if (value.includes('other ')) return
				
				const name = trace.name
				
				let found_fct = null;
				for (var p in facet_names){
					if (facet_names[p] == name) found_fct = p;
				}
				if (!found_fct) return;
				
				if (found_fct == 'elements') value = value.replace(/,\s/g, '-'); // FIXME?

				that.pie_click( { facet: found_fct, value } )
			})
		}


		@ $mol_mem
		layout() {

			const data = this.data()
			const tot_count = this.tot_count()
			const xy_domains = this.xy_domains()

			const annotations_layout = {showarrow: false, font: {family: this.font_family(), size: 13}, borderpad: 0, bgcolor: '#fff'}
			const annotations = data.map((pie, loc_count) => {
				let label = pie.name + ' distribution';
				label = 'Fig. ' + (loc_count+1) + '. ' + label.charAt(0).toUpperCase() + label.slice(1);
				return Object.assign({text: label}, locate_label(xy_domains[tot_count]![loc_count]), annotations_layout);
			})

			return {showlegend: false, annotations}
		}

		@ $mol_mem
		xy_domains() {
			return [
				null,
				[[[0, 1],    [0.03, 1]]],
				[[[0, 0.49], [0,    1]],   [[0.51, 1],    [0,    1]]],
				[[[0, 0.49], [0.53, 1]],   [[0.51, 1],    [0.53, 1]],   [[0, 0.49], [0.03, 0.49]]],
				[[[0, 0.49], [0.53, 1]],   [[0.51, 1],    [0.53, 1]],   [[0, 0.49], [0.03, 0.49]],   [[0.51, 1], [0.03, 0.49]]],
				[[[0, 0.32], [0.51, 1]],   [[0.33, 0.66], [0.51, 1]],   [[0.67, 1], [0.51, 1]],      [[0, 0.32], [0, 0.49]],      [[0.33, 0.66], [0, 0.49]]],
				[[[0, 0.32], [0.51, 1]],   [[0.33, 0.66], [0.51, 1]],   [[0.67, 1], [0.51, 1]],      [[0, 0.32], [0, 0.49]],      [[0.33, 0.66], [0, 0.49]],      [[0.67, 1], [0, 0.49]]],
				[[[0, 0.32], [0.68, 1]],   [[0.33, 0.66], [0.68, 1]],   [[0.67, 1], [0.68, 1]],      [[0, 0.32], [0.34, 0.65]],   [[0.33, 0.66], [0.34, 0.65]],   [[0.67, 1], [0.34, 0.65]], [[0, 0.32], [0.02, 0.31]]],
				[[[0, 0.32], [0.68, 1]],   [[0.33, 0.66], [0.68, 1]],   [[0.67, 1], [0.68, 1]],      [[0, 0.32], [0.34, 0.65]],   [[0.33, 0.66], [0.34, 0.65]],   [[0.67, 1], [0.34, 0.65]], [[0, 0.32], [0.02, 0.31]], [[0.33, 0.66], [0.02, 0.31]]]
			]
		}

		@ $mol_mem
		enter_metrics() {
			return this.json().total_count/150
		}

		@ $mol_mem
		tot_count() {
			let tot_count = 0

			const json = this.json()
			const enter_metrics = this.enter_metrics()
			let recent_facet: null | keyof typeof Facet_names = null;

			for (let i = 0; i < json.payload.length; i++){
				if (json.payload[i].count < enter_metrics || json.payload[i].count > (json.total_count - enter_metrics)) continue;
		
				if (json.payload[i].facet == "classes") tot_count++;
				else {
					if (json.payload[i].facet != recent_facet) tot_count++;
					recent_facet = json.payload[i].facet;
				}
			}
		
			if (!tot_count) return $mol_fail( new $mol_data_error('Warning: not enough data for analysis') )
			return tot_count
		}

		@ $mol_mem
		pies_payload() {
			const json = this.json()

			const enter_metrics = this.enter_metrics()
		
			const pies: { facet: keyof typeof Facet_names, payload: {facet: string, value: string, count: number}[] }[] = []

			json.payload.forEach( item => {
				if (item.count < enter_metrics || item.count > (json.total_count - enter_metrics)) return
		
				// special case of interlacing classes
				if (item.facet == "classes"){
					pies.push({ facet: item.facet, payload: [ item ] })
					return
				}

				let pie = pies.find( p => p.facet == item.facet )
				if (!pie) {
					pie = { facet: item.facet, payload: [] }
					pies.push( pie )
				}
				
				pie.payload.push( item )
			} )

			return pies
		}

		@ $mol_mem
		data() {
			const json = this.json()

			if (!json.total_count || json.total_count == 1) {
				return $mol_fail( new $mol_data_error('Warning: not enough data for analysis') )
			}

			const tot_count = this.tot_count()
			const xy_domains = this.xy_domains()

			const data = this.pies_payload().map( (pie, loc_count)  => {
				const values = []
				const text = []
				
				// rest of data, not loaded
				let sum = 0
				pie.payload.forEach( item => {
					sum += item.count
					values.push( item.count );
					text.push( item.value );
				} )

				if( sum < json.total_count ) {
					values.push( json.total_count - sum );
					text.push("other " + Facet_names[pie.facet]);
				}

				return {
					type: "pie",
					name: Facet_names[pie.facet],
					values,
					text,
					domain: {x: xy_domains[tot_count]![loc_count][0], y: xy_domains[tot_count]![loc_count][1]},
					hoverinfo: "text+percent+name",
					textinfo: "text+percent",
					textposition: "inside",
					hole: 0.3/tot_count,
					marker: {colors: this.colorset()}
				}
			})

			return data
		}
		
	}
	
}
