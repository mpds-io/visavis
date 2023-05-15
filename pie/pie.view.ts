namespace $.$$ {

	const Facet_names = {props: 'properties', elements: 'elements', classes: 'classes', lattices: 'crystal systems'} as const

	export const $visavis_pie_json = $mol_data_record( {
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

	export class $visavis_pie extends $.$visavis_pie {

		plot_title() {
			return this.plot().id()
		}

		json() {
			return $visavis_pie_json( this.plot().json() as any )
		}

		@ $mol_action
		subscribe_events() {

			// const d3 = $lib_d3.all()

			// const json = this.json()

            // warn_demo();
            // if (visavis.mpds_embedded) document.getElementById('expander').style.display = 'block';

            // Plotly.d3.selectAll('g.slice').on({'click': function(evt){
            //     var value = evt.text.split('<br')[0];
            //     if (evt.trace){ // NB trace may or may not be available in Plotly event
            //         var name = evt.trace.name,
            //             found_fct = null;
            //         if (visavis.evtfuse) value = visavis.evtbuff;
            //         else if (value.indexOf('other ') > -1) return;
            //         visavis.evtfuse = 0;
            //         for (var p in visavis.facet_names){
            //             if (visavis.facet_names[p] == name) found_fct = p;
            //         }
            //         if (!found_fct) return;
            //         if (found_fct == 'elements') value = value.replace(/,\s/g, '-'); // FIXME?
            //         if (visavis.mpds_embedded) window.parent.location.hash = window.parent.wmgui.aug_search_cmd(found_fct, value);
            //     } else {
            //         if (value.indexOf('other ') > -1) return;
            //         if (visavis.evtfuse > 1) return;
            //         visavis.evtfuse = visavis.evtfuse ? visavis.evtfuse + 1 : 1;
            //         visavis.evtbuff = value;
            //         var reevt = document.createEvent('Event');
            //         reevt.initEvent('click', false, true);
            //         Plotly.d3.select(this.parentNode.firstChild).node().dispatchEvent(reevt);
            //     }
            // }});
		}


		@ $mol_mem
		layout() {

			const data = this.data()
			const tot_count = this.tot_count()
			const xy_domains = this.xy_domains()

			const annotations_layout = {showarrow: false, font: {size: 13, family: "Exo2"}, borderpad: 0, bgcolor: '#fff'}
			const annotations = data.map((pie, loc_count) => {
				let label = pie.name + ' distribution';
				label = 'Fig. ' + (loc_count+1) + '. ' + label.charAt(0).toUpperCase() + label.slice(1);
				return Object.assign({text: label}, locate_label(xy_domains[tot_count]![loc_count]), annotations_layout);
			})

			return {showlegend: false, font: {family: "Exo2"}, annotations}
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
		
			if (!tot_count) return $mol_fail('Warning: not enough data for analysis');
			// if (!tot_count) return urge('Warning: not enough data for analysis');
			return tot_count
		}

		@ $mol_mem
		data() {
		
			const json = this.json()

			if (!json.total_count || json.total_count == 1) return $mol_fail('Warning: not enough data for analysis');
			// if (!json.total_count || json.total_count == 1) return urge('Warning: not enough data for analysis');

			const data: any[] = []
			const classes = []
			const tot_count = this.tot_count()
			const xy_domains = this.xy_domains()
			const enter_metrics = this.enter_metrics()
		
			let recent_facet: null | keyof typeof Facet_names = null;
		
			let loc_count = 0
			for (var i = 0; i < json.payload.length; i++){
				if (json.payload[i].count < enter_metrics || json.payload[i].count > (json.total_count - enter_metrics)) continue;
		
				// special case of interlacing classes
				if (json.payload[i].facet == "classes"){
					classes.push({
						type: "pie",
						name: Facet_names[json.payload[i].facet],
						values: [json.payload[i].count, json.total_count - json.payload[i].count],
						text: [json.payload[i].value, "other classes"],
						domain: {x: xy_domains[tot_count]![loc_count][0], y: xy_domains[tot_count]![loc_count][1]},
						hoverinfo: "text+percent+name",
						textinfo: "text+percent",
						textposition: "inside",
						hole: 0.3/tot_count,
						marker: {colors: this.colorset()}
					});
					loc_count++;
					continue;
				}
		
				// other facets
				if (json.payload[i].facet != recent_facet){
					if (recent_facet){
						// rest of data, not loaded
						var sum = data[data.length - 1].values.reduce(function(a: number, b: number){ return a + b }, 0);
						if (sum < json.total_count){
							data[data.length - 1].values.push(json.total_count - sum);
							data[data.length - 1].text.push("other " + Facet_names[recent_facet]);
						}
					}
					if (loc_count > 8) break;
					data.push({
						type: "pie",
						name: Facet_names[json.payload[i].facet],
						values: [],
						text: [],
						domain: {x: xy_domains[tot_count]![loc_count][0], y: xy_domains[tot_count]![loc_count][1]},
						hoverinfo: "text+percent+name",
						textinfo: "text+percent",
						textposition: "inside",
						hole: 0.3/tot_count,
						marker: {colors: this.colorset()}
					});
					loc_count++;
				}
		
				recent_facet = json.payload[i].facet;
				data[data.length - 1].values.push(json.payload[i].count);
				data[data.length - 1].text.push(json.payload[i].value);
			}
			if (data.length){
				// NB FIXME once again: rest of data, not loaded
				var sum = data[data.length - 1].values.reduce(function(a: number, b: number){ return a + b }, 0);
				if (sum < json.total_count){
					data[data.length - 1].values.push(json.total_count - sum);
					data[data.length - 1].text.push("other " + Facet_names[recent_facet!]);
				}
			}
			if (classes) data.push(...classes);

			return data
		}

		@ $mol_mem
		draw() {
			const promise = $lib_plotly.all().react(
				this.Root().dom_node() as HTMLElement,
				this.data(), 
				this.layout(),
				this.plot_options(),
			)

			promise.then( () => this.subscribe_events() )
		}

	}
	
}
