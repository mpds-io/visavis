namespace $.$$ {

	const d3 = $mpds_visavis_lib_plotly.d3

	const $mpds_visavis_plot_matrix_json_node = $mol_data_record({
		name: $mol_data_string,
		num: $mol_data_number,
		nump: $mol_data_number,
		size: $mol_data_number,
		rea: $mol_data_number,
		rpp: $mol_data_number,
		rion: $mol_data_number,
		rcov: $mol_data_number,
		rmet: $mol_data_number,
		tmelt: $mol_data_number,
		eneg: $mol_data_number,
		count: $mol_data_optional( $mol_data_number ),
	})

	const $mpds_visavis_plot_matrix_json_link = $mol_data_record({
		source: $mol_data_number,
		target: $mol_data_number,
		value: $mol_data_number,
		cmt: $mol_data_string,
		cmp: $mol_data_optional( $mol_data_number ),
	})

	const $mpds_visavis_plot_matrix_json = $mol_data_record({
		use_visavis_type: $mol_data_const( 'matrix' ),
		answerto: $mol_data_optional( $mol_data_string ),
		payload: $mol_data_record({
			nodes: $mol_data_array( $mpds_visavis_plot_matrix_json_node ),
			links: $mol_data_array( $mpds_visavis_plot_matrix_json_link ),
			fixel: $mol_data_nullable( $mol_data_number ),
		}),
	})

	type Matrix_cell = {
		x: number
		y: number
		z: number
		cmt: string
		cmp: number
		nonformer: boolean 
		intersection?: number
	}

	type Prop_name = keyof ReturnType<typeof $mpds_visavis_elements_list.prop_names>

	export class $mpds_visavis_plot_matrix extends $.$mpds_visavis_plot_matrix {

		@ $mol_mem
		setup() {
			return [
				... this.json_master().payload.fixel ? [ this.Fixel() ] : [],
				... this.plot_raw().jsons().length > 1 ? [ this.Intersection_on() ] : [],
				this.Nonformers(),
				... this.show_setup() ? this.sorting() : [],
			]
		}
		
		@ $mol_mem
		plot_body() {
			return [
				this.Root(),
				... this.x_op() ? [ this.X_label() ] : [],
				... this.y_op() ? [ this.Y_label() ] : [],
				... this.plot_raw().jsons().length > 1 ? [ this.Cmp_legend() ] : [],
				... this.heatmap() ? [ this.Side_right() ] : [],
			]
		}

		@ $mol_mem
		sort_dict() {
			return $mpds_visavis_elements_list.prop_names()
		}

		@ $mol_mem
		x_label() {
			const prop_name = this.x_sort() as keyof ReturnType<typeof $mpds_visavis_elements_list.prop_names>
			return `${this.x_op()} / ${this.sort_dict()[ prop_name ]} →`
		}

		@ $mol_mem
		y_label() {
			const prop_name = this.y_sort() as keyof ReturnType<typeof $mpds_visavis_elements_list.prop_names>
			return `${this.y_op()} / ${this.sort_dict()[ prop_name ]} →`
		}

		@ $mol_mem
		cmp_labels() {
			const jsons = this.plot_raw().jsons()
			return jsons.length > 1 ? jsons.map( json => json.answerto ) : []
		}

		@ $mol_mem
		json_master() {
			const jsons = this.plot_raw().jsons()
			
			const json_master = JSON.parse( JSON.stringify(
				$mpds_visavis_plot_matrix_json( jsons[0] ) 
			) )

			jsons.slice( 1 ).forEach( ( json, i ) => {
				const json_valid = $mpds_visavis_plot_matrix_json( json )
				const links = json_valid.payload.links.map( link => { 
					return { ...link, cmp: i + 1 } 
				} )
				
				json_master.payload.links.push( ...links )
			} )

			this.nonformers_checked( false )

			return $mpds_visavis_plot_matrix_json( json_master )
		}

		nodes() {
			return this.json_master().payload.nodes
		}

		@ $mol_mem
		links() {
			return this.json_master().payload.links
		}

		@ $mol_mem
		links_traversed() {
			const links_map = new Map< string, typeof $mpds_visavis_plot_matrix_json_link['Value'][] >()
			const cells_map = new Map< string, Matrix_cell >()
			const heatmap_datasets: Set< number > = new Set
			let value_min = Infinity
			let value_max = -Infinity
			const intersected_cells: Matrix_cell[] = []

			this.links().forEach( l => {
				links_map.get( l.cmt )?.push( l ) ?? links_map.set( l.cmt, [ l ] )

				const intersection = links_map.get( l.cmt )?.length ?? 0
				if( intersection > 1 ) {
					const cell = cells_map.get( l.cmt )!
					cell.z += l.value
					cell.intersection = intersection
					intersected_cells.push( cell )
				} else {
					cells_map.set( l.cmt, {
						y: l.source, x: l.target, cmt: l.cmt, cmp: l.cmp || 0, z: l.value, nonformer: false,
					} )
				}

				if( Math.floor(l.value) !== l.value ) heatmap_datasets.add( l.cmp || 0 )

				value_min = Math.min( value_min, l.value )
				value_max = Math.max( value_max, l.value )
			} )

			let intersect_value_min = Infinity
			let intersect_value_max = -Infinity
			if( heatmap_datasets.size == 2 ) {
				intersected_cells.forEach( cell => {
					const links = links_map.get( cell.cmt )!
					cell.z = Math.abs( links[0].value - links[1].value )
					intersect_value_min = Math.min( intersect_value_min, cell.z )
					intersect_value_max = Math.max( intersect_value_max, cell.z )
				} )
			}

			return { map: links_map, cells_map, heatmap_datasets, value_min, value_max, intersect_value_min, intersect_value_max }
		}

		@ $mol_mem
		links_map() {
			return this.links_traversed().map
		}

		@ $mol_mem
		heatmap_datasets() {
			return this.links_traversed().heatmap_datasets
		}

		@ $mol_mem
		value_min() {
			if( this.intersection_only() ) return this.links_traversed().intersect_value_min
			return this.links_traversed().value_min
		}

		@ $mol_mem
		value_max() {
			if( this.intersection_only() ) return this.links_traversed().intersect_value_max
			return this.links_traversed().value_max
		}

		@ $mol_mem
		datasets_type() {
			const heatmap_datasets = this.heatmap_datasets()
			if( heatmap_datasets.size == 0 ) {
				return 'entries'
			}
			
			const datesets_quantity = this.plot_raw().jsons().length
			if( datesets_quantity == heatmap_datasets.size && heatmap_datasets.size <= 2 ) {
				return 'heatmap'
			}

			return 'mix'
		}

		@ $mol_mem
		heatmap() {
			if( this.datasets_type() != 'heatmap' ) return false
			if( this.heatmap_datasets().size == 2 ) return this.intersection_only() ? true : false
			return true
		}

		@ $mol_mem_key
		order_by_prop( prop: Prop_name ): any[] {
			return d3.range(95).sort( (a: number, b: any) => {
				return this.nodes()[ a ][ prop ] - this.nodes()[ b ][ prop ] 
			})
		}

		@ $mol_mem
		default_order() {
			return this.order_by_prop( 'nump' )
		}

		@ $mol_mem
		matrix() {
			const matrix: Matrix_cell[][] = this.nodes().map( (node, i) => {
				return d3.range(95).map( (j: any) =>
					({ x: j, y: i, z: 0, cmt: '', nonformer: false })
				)
			} )

			this.links_traversed().cells_map.forEach( cell => {
				matrix[cell.y][cell.x] = {...cell}
				matrix[cell.x][cell.y] = {...cell, x: cell.y, y: cell.x} // NB only AB-all
			})

			if (this.nonformers_checked()) {
				for (const item of $mpds_visavis_elements_nonformer.pd_bin()) {
					matrix[item[0]][item[1]].z = 1;
					matrix[item[1]][item[0]].z = 1; // NB only AB-all
					matrix[item[0]][item[1]].nonformer = true;
					matrix[item[1]][item[0]].nonformer = true; // NB only AB-all
				}
			}

			return matrix
		}

		@ $mol_mem
		size_debounced() {
			const rect = this.Plot().view_rect()
			this.$.$mol_wait_timeout( 300 )
			if (!rect) return NaN

			const size = Math.min(rect.width, rect.height) - this.plot_padding() - this.axis_width()
			return this.size( size )
		}

		@ $mol_mem
		opacity_scale() {
			// return d3.scaleLinear().domain([this.links_value_min(), this.links_value_max()]).range([0.2, 1]).clamp(true) // for new d3 version
			return d3.scale.linear().domain([this.value_min(), this.value_max()]).range([0.2, 1]).clamp(true)
		}

		opacity(index: number) {
			if( this.datasets_type() == 'mix' ) return 1
			return this.heatmap() ? 1 : this.opacity_scale()(index)
		}

		@ $mol_mem
		color_heatmap() {
			// return d3.scaleLinear().domain(d3.range(0, 1, 1.0 / (this.heatmap_colors().length - 1))).range(this.heatmap_colors() as any) // for new d3 version
			return d3.scale.linear().domain(d3.range(0, 1, 1.0 / (this.heatmap_colors().length - 1))).range(this.heatmap_colors() as any)
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
		color_heatmap_scale() {
			// return d3.scaleLinear().domain([this.links_value_min(), this.links_value_max()]).range([0, 1]) // for new d3 version
			return d3.scale.linear().domain([this.value_min(), this.value_max()]).range([0, 1])
		}

		color(index: number, cmp: number) {
			if (this.heatmap()) return this.color_heatmap()( this.color_heatmap_scale()( index ) )
			// if (this.heatmap()) return cmp ? this.colorset()[1] : this.color_heatmap()( this.color_heatmap_scale()( index ) )
			return this.colorset()[cmp] || '#ccc'
		}

		@ $mol_mem
		range() {
			// return d3.scaleBand().domain(this.order()).range([0, this.size()]) // for new d3 version
			return d3.scale.ordinal().rangeBands([0, this.size()]).domain(this.default_order())
		}

		svg_title_text(cell: Matrix_cell) {
			if (!cell.cmt) return ''
			if( this.datasets_type() == 'mix' ) return cell.cmt

			const text = `${cell.cmt}: ${cell.z}`
			if( this.heatmap_datasets().has( Number(cell.cmt) || 0 ) ) return text

			const title = `${text} ${cell.z === 1 ? 'entry' : 'entries'}`

			const links = this.links_map().get( cell.cmt )
			if( links?.length == 1 ) {
				return title
			}

			return `${title} (${ links?.map( l => this.cmp_labels()[ l.cmp ?? 0 ] ).join('; ') })`
		}

		@ $mol_action
		draw_row_cells( row_node: SVGElement, cells_data: Matrix_cell[], intersection_only: boolean ) {
			const that = this

			const range = this.range()
			const rangeBand = range.rangeBand()

			const enters = d3.select(row_node)
				.selectAll('.cell')
				.data( cells_data.filter( d => {
					if( intersection_only ) return d.intersection ? true : false
					if( d.z !== 0 || d.intersection ) return true
					return false
				} ) )
				// .join('rect') // for new d3 version
				.enter()
			
			const cells = enters.append('g')
				cells.attr('class', 'cell')

			const rects = cells.append('rect')
			
			rects.attr('class', (d: any) => d.nonformer ? 'nonformer' : '')
				.attr('id', (d: any) => 'c_' + this.nodes()[d.x].num.toString() + '_' + this.nodes()[d.y].num.toString())
				.attr('x', (d: any) => range(d.x) )
				// .attr('width', range.bandwidth()) // for new d3 version
				// .attr('height', range.bandwidth()) // for new d3 version
				.attr('width', rangeBand)
				.attr('height', rangeBand)
				.style('fill-opacity', (d: any) => this.opacity(d.z))
				.style('fill', (d: any) => {
					if( d.intersection && !that.heatmap() ) return 'gray'
					return this.color(d.z ?? 1, d.cmp)
				})

				.on('mouseover', function (this: any, event: PointerEvent) {
					const cell_data = d3.select(this).data()[0] as Matrix_cell
					d3.select( that.dom_node_actual() ).selectAll( ".row .element" ).classed( "active", (d: any, i: number)=> i == cell_data.y )
					d3.select( that.dom_node_actual() ).selectAll( ".column .element" ).classed( "active", (d: any, i: number)=> i == cell_data.x )
				} )

				.on('mouseout', function (this: any, event: PointerEvent) {
					d3.select( that.dom_node_actual() ).selectAll( ".row text" ).classed( "active", null);
					d3.select( that.dom_node_actual() ).selectAll( ".column text" ).classed( "active", null);
				} )

				.on('click', function (this: any, event: PointerEvent) {
					const sel = d3.select(this)
					var ids = sel.attr("id").substr(2).split("_");
					that.dom_node_actual().querySelector("#c_" + ids[1] + "_" + ids[0])!.classList.add('visited');
					that.dom_node_actual().querySelector("#c_" + ids[0] + "_" + ids[1])!.classList.add('visited');
					const cell_data = sel.data()[0] as Matrix_cell
					that.matrix_click( { cmt: cell_data.cmt } )
				} )

			rects.append('svg:title').text((cell: any) => this.svg_title_text(cell))
				// .attr('mpds_visavis_plot_matrix_intersection', true)
				
			cells.append('text')
				.text((cell: any) => cell.intersection || '')
				// .attr('x', (d: any) => range(d.x) )
				.attr('x', (d: any) => range(d.x) + rangeBand / 2 )
				.attr('dy', '.85em')
				.attr('text-anchor', 'middle')
				.attr('font-weight', 'bold')
				.attr('pointer-events', 'none')

		}

		@ $mol_mem
		draw() {
			if (Number.isNaN( this.size() )) return

			const svg_element = $mol_wire_sync( document ).createElementNS( 'http://www.w3.org/2000/svg', 'svg' )
			const svg = d3.select(svg_element)

			const size = this.size()
			const rangeBand = this.range().rangeBand()

			svg.attr('width', size + this.axis_width())
				.attr('height', size + this.axis_width())
				// .style('font-size', this.range().bandwidth()) // for new d3 version
				.style('font-size', rangeBand + 'px')
				.style('letter-spacing', '1px')
			
			const group = svg[ svg.select('g').empty() ? 'append' : 'select' ]('g')
				.attr('transform', `translate(${this.axis_width()},${this.axis_width()})`)

			group.html("<defs><pattern id='nonformer' patternUnits='userSpaceOnUse' width='4' height='4'><path d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' style='stroke:#ddd;stroke-width:1' /></pattern></defs>")
		
			group.append('rect')
				.attr('class', 'bgmatrix')
				.attr('width', size)
				.attr('height', size);

			const that = this
			const row = group.selectAll('.row')
				.data(this.matrix())
				// .join('g') // for new d3 version
				.enter().append('g')
				.attr('class', 'row')
				.attr('transform', (d: any, i: number) => 'translate(0,' + this.range()(i as any) + ')' )
				.each(function (this: any, cells: any) { that.draw_row_cells(this, cells, that.intersection_only()) })
		
			row.append('line')
				.attr('x2', size);
		
			if( !this.y_op() ) {
				row.append('text')
					.attr('class', 'element')
					.attr('x', -6)
					// .attr('y', this.range().bandwidth() / 2) // for new d3 version
					.attr('y', rangeBand / 2)
					.attr('dy', '.32em')
					.attr('text-anchor', 'end')
					.text((d: any, i: any)=> this.nodes()[i].name)
			}
				
			const column = group.selectAll('.column')
				.data(this.matrix())
				// .join('g') // for new d3 version
				.enter().append('g')
				.attr('class', 'column')
				.attr('transform', (d: any, i: any)=> 'translate(' + this.range()(i) + ')rotate(-90)');
		
			column.append('line')
				.attr('x1', -size);
		
			if( !this.x_op() ) {
				column.append('text')
					.attr('class', 'element')
					.attr('x', 6)
					// .attr('y', this.range().bandwidth() / 2) // for new d3 version
					.attr('y', rangeBand / 2)
					.attr('dy', '.32em')
					.attr('text-anchor', 'start')
					.text((d: any, i: any) => this.nodes()[i].name);
			}

			this.Root().dom_node_actual().replaceChildren( svg_element )

			this.reorder( 0 )
		}

		@ $mol_mem_key
		get_bin_domain( args: { sort: Prop_name, op: string } ){

			const { sort, op } = args
			var cond_slice = $mpds_visavis_elements_list.prop_values(sort).slice(1);
		
			switch (op){
				case 'sum': return [
					d3.min(cond_slice) * 2,
					d3.max($mpds_visavis_elements_list.prop_values(sort)) * 2
				];
				case 'diff': return [
					d3.min(cond_slice),
					d3.max($mpds_visavis_elements_list.prop_values(sort)) - d3.min(cond_slice)
				];
				case 'product': return [
					Math.pow( d3.min(cond_slice), 2 ),
					Math.pow( d3.max($mpds_visavis_elements_list.prop_values(sort)), 2 )
				];
				case 'ratio': return [
					d3.min(cond_slice) / d3.max($mpds_visavis_elements_list.prop_values(sort)),
					d3.max($mpds_visavis_elements_list.prop_values(sort)) / d3.min(cond_slice)
				];
				case 'max': return [
					d3.min(cond_slice),
					d3.max($mpds_visavis_elements_list.prop_values(sort))
				];
				case 'min': return [
					d3.min(cond_slice),
					d3.max($mpds_visavis_elements_list.prop_values(sort))
				];
			}
		}

		@ $mol_mem_key
		renorm( args: { sort: Prop_name, op?: string } ) {
			const { sort, op } = args
			const svgdim = this.size()
			return op ?
				d3.scale.quantize().range(d3.range(0, svgdim, svgdim / 95)).domain( this.get_bin_domain( {sort, op} ) ) :
				d3.scale.ordinal().rangeBands([0, svgdim]).domain( this.order_by_prop( sort ) )
		}

		@ $mol_mem
		sort_control(next?: any) {
			if ( next !== undefined ) {
				this.x_sort( next )
				this.y_sort( next )
				return next as never
			}
			return "nump"
		}
		
		@ $mol_mem
		x_op_str( next?: string ) {
			if( next == 'null' ) {
				this.x_op( null )
				return next
			}
			return this.x_op( next )
		}
		
		@ $mol_mem
		y_op_str( next?: string ) {
			if( next == 'null' ) {
				this.y_op( null )
				return next
			}
			return this.y_op( next )
		}

		@ $mol_mem
		auto_reorder(){
			this.x_sort()
			this.y_sort()
			this.x_op()
			this.y_op()
			this.reorder( 600 )
		}

		@ $mol_action
		reorder( duration: number ){
			const x_sort = this.x_sort() as Prop_name
			const y_sort = this.y_sort() as Prop_name || x_sort
			const x_op = this.x_op() as string | undefined
			const y_op = this.y_op() as string | undefined

			const svg = d3.select(this.Root().dom_node_actual().firstChild)
			
			function bin_op( op: string, a: number, b: number ){
				switch (op){
					case 'sum': return a + b;
					case 'diff': return Math.abs(a - b);
					case 'product': return a * b;
					case 'ratio': return a / b;
					case 'max': return (a > b) ? a : b;
					case 'min': return (a < b) ? a : b;
				}
			}

			const arrange = ( sort: Prop_name, op: string, input: any, index?: any)=> {
				const x = input.x !== undefined ? $mpds_visavis_elements_list.prop_values(sort)[input.x + 1] : 
					$mpds_visavis_elements_list.prop_values(sort)[index]
				const y = input.y !== undefined ? $mpds_visavis_elements_list.prop_values(sort)[input.y + 1] : 
					$mpds_visavis_elements_list.prop_values(sort)[index]
				var bin = bin_op( op, x, y )
				return this.renorm( { sort, op } )( bin )
			}

			const x_arrange = (input: any, index?: any)=> {
				if ( !x_op ) {
					const x_renorm = this.renorm( { sort: x_sort, op: x_op } )
					return index !== undefined ? x_renorm(index) : x_renorm(input.x);
				}
				return arrange( x_sort, x_op, input, index )
			};
			
			const y_arrange = (input: any, index?: any)=> {
				if ( !y_op ) {
					const y_renorm = this.renorm( { sort: y_sort, op: y_op } )
					return y_renorm(index)
				}
				return arrange( y_sort, y_op, input, index )
			};
		
			d3.selectAll("rect.visited").classed("visited", false);
			d3.selectAll("g.column text").classed("hidden", x_op);
			d3.selectAll("g.row text").classed("hidden", y_op);
			d3.select("rect.bgmatrix").classed("hidden", (x_op || y_op));
		
			var t = svg.transition().duration(duration);
		
			if (y_op){
				t.selectAll(".row")
					.attr("transform", null)
					.selectAll(".cell")
					.attr("x", null)
					.attr("transform", (d: any)=> { return "translate(" + x_arrange(d) + "," + y_arrange(d) + ")" });
		
			} else {
				t.selectAll(".row")
					.attr("transform", (d: any, i: any)=> { return "translate(0," + y_arrange(d, i) + ")" }) // y-axis
					.selectAll(".cell")
					.attr("transform", null)
					.attr("x", (d: any)=> { return x_arrange(d) }); // points, moved in x-direction
			}
		
			if (!x_op){
				t.selectAll(".column")
					.attr("transform", (d: any, i: any)=> { return "translate(" + x_arrange(d, i) + ")rotate(-90)" }); // x-axis
			}

		}

	}

}
