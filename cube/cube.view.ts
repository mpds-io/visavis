namespace $.$$ {

	const $visavis_cube_json = $mol_data_record({
		payload: $mol_data_record({
			tcube: $mol_data_optional( $mol_data_boolean ),
			points: $mol_data_record({
				x: $mol_data_array( $mol_data_number ),
				y: $mol_data_array( $mol_data_number ),
				z: $mol_data_array( $mol_data_number ),
				v: $mol_data_array( $mol_data_number ),
				labels: $mol_data_array( $mol_data_string ),
			}),
			fixel: $mol_data_nullable( $mol_data_boolean ),
			xtitle: $mol_data_optional( $mol_data_string ),
			ytitle: $mol_data_optional( $mol_data_string ),
			ztitle: $mol_data_optional( $mol_data_string ),
		}),
	})

	export class $visavis_cube extends $.$visavis_cube {

		plot_body() {
			return [
				this.Root(),
				... this.heatmap() ? [ this.Side_right() ] : [],
			]
		}

		plot_title() {
			return this.plot().id()
		}

		json() {
			return $visavis_cube_json( this.plot().json() as any )
		}

		@ $mol_mem
		value_list() {
			return this.json().payload.points.v.slice().sort( (a, b) => a - b )
		}

		value_min() {
			return this.value_list()[0]
		}

		value_max() {
			return this.value_list().slice(-1)[0]
		}

		@ $mol_mem_key
		order(order: string) {
			return $lib_d3.all().range(95).sort( (a: any, b: any) => ($visavis_element_prop as any)[order][a + 1] - ($visavis_element_prop as any)[order][b + 1] ) as number[]
		}

		@ $mol_mem
		heatmap() {
			return this.json().payload.points.v.some(val => Math.floor(val) !== val)
		}

		heatmap_color( index: number ) {
			return this.heatmap_colors()[index]
		}

		heatmap_color_list() {
			return [
				this.Heatmap_min(),
				... this.heatmap_colors().map( (_, index) => this.Heatmap_color(index) ),
				this.Heatmap_max(),
			]
		}

		@ $mol_mem
		marker() {
			return {
				color: this.heatmap() ? this.json().payload.points.v : this.colorset()[0],
				... this.heatmap() ? { colorscale: 'Rainbow' } : {},
				size: 4,
				opacity: 0.9
			}
		}

		@ $mol_mem
		data_nonformers() {
			const { x, y, z, labels } = $visavis_nonformer_pd_tri
			return {
				type: "scatter3d",
				text: labels,
				mode: "markers",
				hoverinfo: "text",
				marker: {color: "#ccc", size: 4, opacity: 0.9},
				projection: {x: {show: true, opacity: 0.25}, y: {show: true, opacity: 0.25}, z: {show: true, opacity: 0.25}},
				...this.convert_to_axes(x, y, z, this.x_sort(), this.y_sort(), this.z_sort())
			}
		}

		@ $mol_mem
		data() {
			return {
				type: "scatter3d",
				text: this.json().payload.points.labels,
				mode: "markers",
				hoverinfo: "text",
				marker: this.marker(),
				projection: {x: {show: true, opacity: 0.05}, y: {show: true, opacity: 0.05}, z: {show: true, opacity: 0.05}},
				...this.convert_to_axes(this.json().payload.points.x, this.json().payload.points.y, this.json().payload.points.z, this.x_sort(), this.y_sort(), this.z_sort())
			}
		}

		@ $mol_mem
		data_shown() {
			return [
				... this.nonformers() ? [this.data_nonformers()] : [],
				this.data(),
			]
		}

		@ $mol_mem
		scene() {
			return {
				aspectmode: 'cube',
				xaxis: {
					title: 'x_sort',
					range: [1, 95],
					titlefont: {color: this.x_op() ? '#000' : '#fff', size: 10},
					backgroundcolor: '#fbfbfb',
					gridcolor: '#fff',
					showbackground: true,
					showticklabels: !this.x_op(),
					showline: false,
					tickfont: {size: 11},
					ticktext: this.order_els(this.x_sort()).slice(0, 95).filter(function(el, idx){ return idx % 2 === 0 }),
					tickvals: $lib_d3.all().range(1, 96, 2)
				},
				yaxis: {
					title: 'y_sort',
					range: [1, 95],
					titlefont: {color: this.y_op() ? '#000' : '#fff', size: 10},
					backgroundcolor: '#f6f6f6',
					gridcolor: '#fff',
					showbackground: true,
					showticklabels: !this.y_op(),
					showline: false,
					tickfont: {size: 11},
					ticktext: this.order_els(this.y_sort()).slice(0, 95).filter(function(el, idx){ return idx % 2 === 0 }),
					tickvals: $lib_d3.all().range(1, 96, 2)
				},
				zaxis: {
					title: 'z_sort',
					range: [1, 95],
					titlefont: {color: this.z_op() ? '#000' : '#fff', size: 10},
					backgroundcolor: '#eee',
					gridcolor: '#fff',
					showbackground: true,
					showticklabels: !this.z_op(),
					showline: false,
					tickfont: {size: 11},
					ticktext: this.order_els(this.z_sort()).slice(0, 95).filter(function(el, idx){ return idx % 2 === 0 }),
					tickvals: $lib_d3.all().range(1, 96, 2)
				},
				camera: {projection: {type: 'perspective'}},
			}	
		}

		@ $mol_mem
		draw() {
			this.Root().view_rect()

			return $lib_plotly.all().react(
				this.Root().dom_node() as HTMLElement,
				this.data_shown() as any, 
				{
					font: {family: "Exo2"},
					showlegend: false,
					scene: this.scene() as any,
					margin: {
						l: 0,
						r: 0,
						b: 0,
						t: 0,
						pad: 0
					}
				},
				{displaylogo: false, displayModeBar: false, staticPlot: false},
			)
		}


		ter_op(op: 'sum' | 'diff' | 'product' | 'ratio' | 'max' | 'min', a: number, b: number, c: number){
			switch (op){
				case 'sum': return a + b + c;
				case 'diff': return Math.abs(a - b) + Math.abs(a - c) + Math.abs(b - c);
				case 'product': return (a * b) + (a * c) + (b * c);
				case 'ratio': return (a / b) + (a / c) + (b / c);
				case 'max': return ((a > b && a > c) ? a : ((b > a && b > c) ? b : c));
				case 'min': return ((a < b && a < c) ? a : ((b < a && b < c) ? b : c));
			}
		}

		convert_to_axes(x_src: readonly number[], y_src: readonly number[], z_src: readonly number[], x_sort: any, y_sort: any, z_sort: any, x_op?: any, y_op?: any, z_op?: any){
			//console.log(x_src, y_src, z_src, x_sort, y_sort, z_sort, x_op, y_op, z_op);
			var converted = {'x': [], 'y': [], 'z': []};
		
			if (x_op){
				var x_temp = [];
				for (var i = 0; i < x_src.length; i++){
					//console.log('x', $visavis_elementals[x_sort][x_src[i]], $visavis_elementals[x_sort][y_src[i]], $visavis_elementals[x_sort][z_src[i]], ter_op(x_op, $visavis_elementals[x_sort][x_src[i]], $visavis_elementals[x_sort][y_src[i]], $visavis_elementals[x_sort][z_src[i]]));
		
					x_temp.push( this.ter_op(x_op, ($visavis_element_prop as any)[x_sort][x_src[i]], ($visavis_element_prop as any)[x_sort][y_src[i]], ($visavis_element_prop as any)[x_sort][z_src[i]]) );
				}
				var x_renorm = $lib_d3.all().scaleQuantize().range($visavis_element_prop.num.slice(1)).domain([$lib_d3.all().min(x_temp), $lib_d3.all().max(x_temp)]);
				//console.log(x_temp);
				converted['x'] = x_temp.map(x_renorm);
		
			} else {
				for (var i = 0; i < x_src.length; i++){
					(converted['x'] as any).push( (x_sort == 'num') ? x_src[i] : this.order(x_sort).indexOf(x_src[i] - 1) + 1 ); // FIXME first elementals item belongs to X, i.e. 0
				}
			}
			if (y_op){
				var y_temp = [];
				for (var i = 0; i < y_src.length; i++){
					//console.log('y', $visavis_elementals[y_sort][x_src[i]], $visavis_elementals[y_sort][y_src[i]], $visavis_elementals[y_sort][z_src[i]], ter_op(y_op, $visavis_elementals[y_sort][x_src[i]], $visavis_elementals[y_sort][y_src[i]], $visavis_elementals[y_sort][z_src[i]]));
		
					y_temp.push( this.ter_op(y_op, ($visavis_element_prop as any)[y_sort][x_src[i]], ($visavis_element_prop as any)[y_sort][y_src[i]], ($visavis_element_prop as any)[y_sort][z_src[i]]) );
				}
				var y_renorm = $lib_d3.all().scaleQuantize().range($visavis_element_prop.num.slice(1)).domain([$lib_d3.all().min(y_temp), $lib_d3.all().max(y_temp)]);
				//console.log(y_temp);
				converted['y'] = y_temp.map(y_renorm);
		
			} else {
				for (var i = 0; i < y_src.length; i++){
					(converted['y'] as any).push( (y_sort == 'num') ? y_src[i] : this.order(y_sort).indexOf(y_src[i] - 1) + 1 ); // FIXME first elementals item belongs to X, i.e. 0
				}
			}
			if (z_op){
				var z_temp = [];
				for (var i = 0; i < z_src.length; i++){
					//console.log('z', $visavis_elementals[z_sort][x_src[i]], $visavis_elementals[z_sort][y_src[i]], $visavis_elementals[z_sort][z_src[i]], ter_op(z_op, $visavis_elementals[z_sort][x_src[i]], $visavis_elementals[z_sort][y_src[i]], $visavis_elementals[z_sort][z_src[i]]));
		
					z_temp.push( this.ter_op(z_op, ($visavis_element_prop as any)[z_sort][x_src[i]], ($visavis_element_prop as any)[z_sort][y_src[i]], ($visavis_element_prop as any)[z_sort][z_src[i]]) );
				}
				var z_renorm = $lib_d3.all().scaleQuantize().range($visavis_element_prop.num.slice(1)).domain([$lib_d3.all().min(z_temp), $lib_d3.all().max(z_temp)]);
				//console.log(z_temp);
				converted['z'] = z_temp.map(z_renorm);
		
			} else {
				for (var i = 0; i < z_src.length; i++){
					(converted['z'] as any).push( (z_sort == 'num') ? z_src[i] : this.order(z_sort).indexOf(z_src[i] - 1) + 1 ); // FIXME first elementals item belongs to X, i.e. 0
				}
			}
			//console.log(converted);
			return converted;
		}

		@ $mol_mem_key
		order_els(prop: string){
			return $visavis_element_list.slice(1).sort(function(a, b){
				return ($visavis_element_prop as any)[prop][$visavis_element_list.indexOf(a)] - ($visavis_element_prop as any)[prop][$visavis_element_list.indexOf(b)]
			});
		}

	}
	
}
