namespace $.$$ {

	const $visavis_discovery_json_point = $mol_data_array( $mol_data_number )
	const $visavis_discovery_json_payload = $mol_data_record({
		points: $mol_data_array( $visavis_discovery_json_point ),
	})
	const $visavis_discovery_json = $mol_data_record({
		payload: $visavis_discovery_json_payload,
		answerto: $mol_data_string,
	})
	const $visavis_discovery_discover_item = $mol_data_record({
		points: $mol_data_array( $visavis_discovery_json_point ),
		name: $mol_data_string
	})

	function discover(elementals_on: string[], first: ReturnType<typeof $visavis_discovery_discover_item>, second?: ReturnType<typeof $visavis_discovery_discover_item>){
		// if (!window.mlPca) return urge('Sorry, your web-browser is too old for this task');
	
		const to_predict = [],
			labels = [],
			nlen = elementals_on.length
		let	given_separation = 0;
			// given_separation = false;
	
		// if (!first.points.length || (second && !second.points.length)) return urge('Error: not enough data for analysis');
	
		for (let i = 0; i < first.points.length; i++){
	
			const prop_array = [],
				label = [];
	
			for (let j = 0; j < first.points[0].length; j++){
	
				for (let k = 0; k < nlen; k++){
					prop_array.push( ($visavis_element_prop as any)[elementals_on[k]] [ first.points[i][j] ] );
				}
	
				label.push($visavis_element_list[ first.points[i][j] ]);
			}
			to_predict.push(prop_array);
			labels.push(label.filter(function(x){ return x }).join('-'));
		}
	
		if (second){
			given_separation = to_predict.length;
	
			for (let i = 0; i < second.points.length; i++){
	
				const prop_array = []
				const label = []
	
				for (let j = 0; j < second.points[0].length; j++){
	
					for (let k = 0; k < nlen; k++){
						prop_array.push( ($visavis_element_prop as any)[elementals_on[k]][ second.points[i][j] ] );
					}
	
					label.push($visavis_element_list[ second.points[i][j] ]);
				}
	
				const labelStr = label.filter( (x)=> x ).join('-');
				// discard points in the *second* that are already in the *first*
				if (labels.indexOf(labelStr) == -1){
					to_predict.push(prop_array);
					labels.push(labelStr);
				}
			}
			// if (to_predict.length == given_separation) return urge('Error: a selected dataset is fully included into a reference dataset');
		}
	
		// if (to_predict.length > 21000) return urge('Error: too much data for analysis');
	
		const mlPca: any = $visavis_lib.pca()
		const pca = new mlPca(to_predict)
		const predicted = pca.predict(to_predict, {nComponents: 2});
	
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

	export class $visavis_discovery extends $.$visavis_discovery {

		plot_title() {
			return this.plot().id()
		}

		json() {
			return $visavis_discovery_json( this.plot().json() as any )
		}

		elementals_dict() {
			return $visavis_elemental_names
		}

		@ $mol_action
		subscribe_events() {


			const d3 = $lib_d3.all()

			const json = this.json() as any

			// if (visavis.mpds_embedded) {
			// 	document.getElementById('expander').style.display = 'block';
			// } else {
			// 	return
			// }

			// Plotly.d3.select('#visavis').on('click', function(evt){
			// 	if (visavis.cache.type != 'discovery') return false;

			// 	evt = evt || window.event;
			// 	var node = evt.target,
			// 		index = 0;
			// 	if (node.tagName != 'path' || node.getAttribute('class') != 'point') return false;

			// 	var oflag = node.style.opacity;
			// 	node.style.fill = '#0f0';
			// 	while ((node = node.previousElementSibling)){
			// 		index++;
			// 	}
			// 	var label = [],
			// 		point = (oflag == 1) ? visavis.cache.ref.points[index] : visavis.cache.cmp.points[index];
			// 	if (!point) return false;

			// 	point.forEach(function(i){
			// 		label.push(visavis.chem_els[i]);
			// 	});
			// 	label = label.filter(function(x){ return x }).join('-');
			// 	window.open(window.location.protocol + "//" + window.location.host + window.parent.wmgui.aug_search_cmd("elements", label));
			// });
		}

		@ $mol_mem
		layout() {
			return {
				showlegend: false,
				hovermode: "closest",
				xaxis: {showgrid: false},
				yaxis: {showgrid: false},
				margin: {
					l: 0,
					r: 0,
					b: 0,
					t: 0,
					pad: 0
				},
				annotations: [
					{x: 0.63, y: 0.97, xref: 'paper', yref: 'paper', xanchor: 'right', yanchor: 'bottom', text: '<i>Second Principal Component (a<sub>1</sub>x + b<sub>1</sub>y + c<sub>1</sub>z + ...)</i>', showarrow: false, bgcolor: '#fff', font: {family: "Exo2", size: 14}},
					{x: 0.97, y: 0.67, xref: 'paper', yref: 'paper', xanchor: 'left', yanchor: 'top', text: '<i>First Principal Component (a<sub>2</sub>x + b<sub>2</sub>y + c<sub>2</sub>z + ...)</i>', showarrow: false, bgcolor: '#fff', textangle: 270, font: {family: "Exo2", size: 14}}
				]
			}
		}

		@ $mol_mem
		data() {
		
			const json = this.json()

			const elementals_on: Array<keyof ReturnType<$visavis_discovery["elementals_dict"]>> = []
			Object.keys( this.elementals_dict() ).forEach( key => {
				if (this.elemental_checked(key)) {
					elementals_on.push( key as keyof ReturnType<$visavis_discovery["elementals_dict"]> )
				}
			} )

			// if (visavis.cache && visavis.cache.type == 'discovery'){
			// 	var ref = {points: visavis.cache.ref.points, name: visavis.cache.ref.name},
			// 		cmp = {points: json.payload.points, name: json.answerto};
			// 	visavis.cache.cmp = cmp;
		
			// } else {
			// 	var ref = {points: json.payload.points, name: json.answerto},
			// 		cmp = false;
			// 	visavis.cache = {ref: ref, type: 'discovery'};
			// }

			var result = discover(elementals_on, $visavis_discovery_discover_item({points: json.payload.points, name: json.answerto}));
			if (!result || !result[0].discovery) return;
		
			var traces = [];
		
			for (var i = 0; i < result.length; i++){
				var dscolor = (i == 0) ? '#3e3f95' : '#900',
					oflag = (i == 0) ? 1 : 0.9;
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
