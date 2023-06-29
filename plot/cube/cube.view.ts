namespace $.$$ {

	const $mpds_visavis_plot_cube_json = $mol_data_record({
		payload: $mol_data_record({
			tcube: $mol_data_optional( $mol_data_boolean ),
			points: $mol_data_record({
				x: $mol_data_array( $mol_data_number ),
				y: $mol_data_array( $mol_data_number ),
				z: $mol_data_array( $mol_data_number ),
				v: $mol_data_array( $mol_data_number ),
				labels: $mol_data_array( $mol_data_string ),
			}),
			fixel: $mol_data_nullable( $mol_data_variant( $mol_data_boolean, $mol_data_number ) ),
			xtitle: $mol_data_optional( $mol_data_string ),
			ytitle: $mol_data_optional( $mol_data_string ),
			ztitle: $mol_data_optional( $mol_data_string ),
		}),
		answerto: $mol_data_optional( $mol_data_string ),
	})

	type Prop_name = keyof ReturnType<typeof $mpds_visavis_elements_list.prop_names>

	export class $mpds_visavis_plot_cube extends $.$mpds_visavis_plot_cube {

		@ $mol_mem
		setup() {
			return [
				... this.show_fixel() ? [ this.Fixel() ] : [],
				this.json_cmp() ? this.Diffrence_on() : this.Nonformers(),
				... this.show_setup() ? [ this.X_order(), this.Y_order(), this.Z_order() ] : [],
			]
		}
		
		@ $mol_mem
		plot_body() {
			return [
				this.Root(),
				... this.json_cmp() ? [ this.Cmp_legend() ] : [],
				... this.heatmap() ? [ this.Side_right() ] : [],
			]
		}

		json() {
			return $mpds_visavis_plot_cube_json( this.plot_raw().json() as any )
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
		order(order: Prop_name) {
			return $lib_d3.all().range(95).sort( (a: any, b: any) =>
				$mpds_visavis_elements_list.element_by_num(a + 1)[order] - $mpds_visavis_elements_list.element_by_num(b + 1)[order]
			) as number[]
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

		@ $mol_mem_key
		marker( color_id: number ) {
			return {
				color: this.heatmap() ? this.json().payload.points.v : this.colorset()[ color_id ],
				... this.heatmap() ? { colorscale: 'Rainbow' } : {},
				size: 4,
				opacity: 0.9
			}
		}

		@ $mol_mem
		scatter3d_common() {
			return {
				type: "scatter3d",
				mode: "markers",
				hoverinfo: "text",
				projection: {x: {show: true, opacity: 0.25}, y: {show: true, opacity: 0.25}, z: {show: true, opacity: 0.25}},
			}
		}

		@ $mol_mem
		data_nonformers() {
			const { x, y, z } = $mpds_visavis_elements_nonformer.pd_tri_nums()
			return {
				...this.scatter3d_common(),
				text: $mpds_visavis_elements_nonformer.pd_tri_labels(),
				marker: {color: "#ccc", size: 4, opacity: 0.9},
				...this.convert_to_axes(x, y, z, 
					this.x_sort() as Prop_name, 
					this.y_sort() as Prop_name, 
					this.z_sort() as Prop_name
				)
			}
		}

		@ $mol_mem
		data() {
			return {
				...this.scatter3d_common(),
				text: this.json().payload.points.labels,
				marker: this.marker( 0 ),
				...this.convert_to_axes(
					this.json().payload.points.x, 
					this.json().payload.points.y, 
					this.json().payload.points.z, 
					this.x_sort() as Prop_name, 
					this.y_sort() as Prop_name, 
					this.z_sort() as Prop_name,
				)
			}
		}

		@ $mol_mem
		data_cmp() {
			if (!this.json_cmp() ) return null
			this.nonformers_checked( false )
			this.first_cmp_label( this.json().answerto )
			this.second_cmp_label( this.json_cmp().answerto )
			return {
				...this.scatter3d_common(),
				text: this.json_cmp().payload.points.labels,
				marker: this.marker( 1 ),
				...this.convert_to_axes(
					this.json_cmp().payload.points.x, 
					this.json_cmp().payload.points.y, 
					this.json_cmp().payload.points.z, 
					this.x_sort() as Prop_name, 
					this.y_sort() as Prop_name, 
					this.z_sort() as Prop_name,
				)
			}
		}

		@ $mol_mem
		data_shown() {
			return [
				... this.nonformers_checked() ? [this.data_nonformers()] : [],
				this.data(),
				... this.json_cmp() ? [this.data_cmp()] : [],
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
					ticktext: this.order_els(this.x_sort() as Prop_name).slice(0, 95).filter(function(el, idx){ return idx % 2 === 0 }),
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
					ticktext: this.order_els(this.y_sort() as Prop_name).slice(0, 95).filter(function(el, idx){ return idx % 2 === 0 }),
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
					ticktext: this.order_els(this.z_sort() as Prop_name).slice(0, 95).filter(function(el, idx){ return idx % 2 === 0 }),
					tickvals: $lib_d3.all().range(1, 96, 2)
				},
				camera: {projection: {type: 'perspective'}},
			}	
		}

		@ $mol_action
		subscribe_events() {
			const d3 = $lib_d3.all()

			const that = this
			d3.select( this.dom_node_actual() ).select( 'div.js-plotly-plot' ).on( 'click', (event: MouseEvent)=> {
				const node = event.target as HTMLElement
				if (node.getAttribute('class') != 'nums') return false;
				
				const label_data = d3.select(node).data()[0]
				that.cube_click( { label: label_data.text } )
			} )
		}

		@ $mol_mem
		layout() {
			return {
				showlegend: false,
				scene: this.scene() as any,
				margin: {
					l: 0,
					r: 0,
					b: 0,
					t: 0,
					pad: 0
				}
			}
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

		convert_to_axes(
			x_src: readonly number[], 
			y_src: readonly number[], 
			z_src: readonly number[], 
			x_sort: Prop_name, 
			y_sort: Prop_name, 
			z_sort: Prop_name, 
			x_op?: any, 
			y_op?: any, 
			z_op?: any
		){
			//console.log(x_src, y_src, z_src, x_sort, y_sort, z_sort, x_op, y_op, z_op);
			var converted = {'x': [], 'y': [], 'z': []};
		
			if (x_op){
				var x_temp = [];
				for (var i = 0; i < x_src.length; i++){
					//console.log('x', $mpds_visavis_elementals[x_sort][x_src[i]], $mpds_visavis_elementals[x_sort][y_src[i]], $mpds_visavis_elementals[x_sort][z_src[i]], ter_op(x_op, $mpds_visavis_elementals[x_sort][x_src[i]], $mpds_visavis_elementals[x_sort][y_src[i]], $mpds_visavis_elementals[x_sort][z_src[i]]));
		
					x_temp.push( this.ter_op(
						x_op, 
						$mpds_visavis_elements_list.element_by_num( x_src[i] )[ x_sort ], 
						$mpds_visavis_elements_list.element_by_num( y_src[i] )[ x_sort ], 
						$mpds_visavis_elements_list.element_by_num( z_src[i] )[ x_sort ], 
					) )
				}
				var x_renorm = $lib_d3.all().scaleQuantize()
					.range( $mpds_visavis_elements_list.list().slice(1).map( el => el.num ) )
					.domain( [$lib_d3.all().min(x_temp), $lib_d3.all().max(x_temp)] )
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
					//console.log('y', $mpds_visavis_elementals[y_sort][x_src[i]], $mpds_visavis_elementals[y_sort][y_src[i]], $mpds_visavis_elementals[y_sort][z_src[i]], ter_op(y_op, $mpds_visavis_elementals[y_sort][x_src[i]], $mpds_visavis_elementals[y_sort][y_src[i]], $mpds_visavis_elementals[y_sort][z_src[i]]));
		
					y_temp.push( this.ter_op(
						y_op, 
						$mpds_visavis_elements_list.element_by_num( x_src[i] )[ y_sort ], 
						$mpds_visavis_elements_list.element_by_num( y_src[i] )[ y_sort ], 
						$mpds_visavis_elements_list.element_by_num( z_src[i] )[ y_sort ], 
					) )
				}
				var y_renorm = $lib_d3.all().scaleQuantize()
					.range( $mpds_visavis_elements_list.list().slice(1).map( el => el.num ) )
					.domain( [$lib_d3.all().min(y_temp), $lib_d3.all().max(y_temp)] );
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
					//console.log('z', $mpds_visavis_elementals[z_sort][x_src[i]], $mpds_visavis_elementals[z_sort][y_src[i]], $mpds_visavis_elementals[z_sort][z_src[i]], ter_op(z_op, $mpds_visavis_elementals[z_sort][x_src[i]], $mpds_visavis_elementals[z_sort][y_src[i]], $mpds_visavis_elementals[z_sort][z_src[i]]));
		
					z_temp.push( this.ter_op(
						z_op, 
						$mpds_visavis_elements_list.element_by_num( x_src[i] )[ z_sort ], 
						$mpds_visavis_elements_list.element_by_num( y_src[i] )[ z_sort ], 
						$mpds_visavis_elements_list.element_by_num( z_src[i] )[ z_sort ], 
					) )
				}
				var z_renorm = $lib_d3.all().scaleQuantize()
					.range( $mpds_visavis_elements_list.list().slice(1).map( el => el.num ) )
					.domain([$lib_d3.all().min(z_temp), $lib_d3.all().max(z_temp)]);
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
		order_els(prop: Prop_name) {
			return $mpds_visavis_elements_list.list().slice(1).sort(function(a, b){
				return a[prop] - b[prop]
			}).map( el => el.name )
		}

	}
	
}
