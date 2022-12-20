namespace $.$$ {

	type Matrix_node = {
		name: string
		num: number
		nump: number
		size: number
		rea: number
		rpp: number
		rion: number
		rcov: number
		rmet: number
		tmelt: number
		eneg: number
		count?: number
	}

	type Matrix_link = {
		source: number
		target: number
		value: number
		cmt: string
		cmp?: number
	}

	type Matrix = {
		error: null | Error
		payload: {
			nodes: Matrix_node[],
			links: Matrix_link[],
			fixel: null,
		}
		answerto: string
		use_visavis_type: 'matrix'
	}

	type Matrix_cell = {
		x: number
		y: number
		z: number
		cmt: string
		cmp: number
		nonformer: boolean 
	}

	export class $visavis_matrix extends $.$visavis_matrix {

		@ $mol_mem
		data() {
			return this.file() as Matrix
		}
		
		nodes() {
			return this.data().payload.nodes
		}

		@ $mol_mem
		links() {
			return this.data().payload.links.sort( (a, b) => a.value - b.value )
		}

		links_value_min() {
			return this.links()[0].value
		}

		links_value_max() {
			return this.links().slice(-1)[0].value
		}

		@ $mol_mem
		heatmap() {
			return this.links().reduce( (heatmap, link) => {
				if (!heatmap && Math.floor(link.value) !== link.value) return true
				else if (link.cmp) return false
				return heatmap
			}, false )
		}

		plot_body() {
			return [
				this.Root(),
				... this.heatmap() ? [ this.Side_right() ] : [],
			]
		}

		@ $mol_mem
		order() {
			return $lib_d3.all().range(95).sort( (a: any, b: any) => this.nodes()[a][ this.order_current() ] - this.nodes()[b][ this.order_current() ] )
		}

		@ $mol_mem
		matrix() {
			const matrix: Matrix_cell[][] = this.nodes().map( (node, i) => $lib_d3.all().range(95).map( (j: any) => ({ x: j, y: i, z: 0, cmt: '', cmp: 0, nonformer: false }) ) )

			for (const link of this.links()) {
				matrix[link.source][link.target].z += link.value;
				matrix[link.target][link.source].z += link.value; // NB only AB-all
				matrix[link.source][link.target].cmt = link.cmt;
				matrix[link.target][link.source].cmt = link.cmt; // NB only AB-all
				matrix[link.source][link.target].cmp = link.cmp || 0;
				matrix[link.target][link.source].cmp = link.cmp || 0;
			}

			if (this.nonformers()) {
				for (const item of $visavis_nonformer_pd_bin) {
					matrix[item[0]][item[1]].z = 1;
					matrix[item[1]][item[0]].z = 1; // NB only AB-all
					matrix[item[0]][item[1]].nonformer = true;
					matrix[item[1]][item[0]].nonformer = true; // NB only AB-all
				}
			}

			return matrix
		}

		@ $mol_mem
		size() {
			const rect = this.Plot().Body().view_rect()
			if (!rect) return NaN
			return Math.min(rect.width, rect.height) - this.plot_padding() - this.axis_width()
		}

		@ $mol_mem
		opacity_scale() {
			return $lib_d3.all().scaleLinear().domain([this.links_value_min(), this.links_value_max()]).range([0.2, 1]).clamp(true)
		}

		opacity(index: number) {
			return this.heatmap() ? 1 : this.opacity_scale()(index)
		}

		@ $mol_mem
		color_heatmap() {
			return $lib_d3.all().scaleLinear().domain($lib_d3.all().range(0, 1, 1.0 / (this.heatmap_colors().length - 1))).range(this.heatmap_colors() as any)
		}

		heatmap_color( index: number ) {
			return this.heatmap_colors()[index]
		}

		heatmap_color_list() {
			return this.heatmap_colors().map( (_, index) => this.Heatmap_color(index) )
		}

		@ $mol_mem
		color_heatmap_scale() {
			return $lib_d3.all().scaleLinear().domain([this.links_value_min(), this.links_value_max()]).range([0, 1])
		}

		color(index: number, cmp: number) {
			if (this.heatmap()) return cmp ? this.colorset()[1] : this.color_heatmap()( this.color_heatmap_scale()( index ) )
			return this.colorset()[cmp] || '#ccc'
		}

		@ $mol_mem
		range() {
			return $lib_d3.all().scaleBand().domain(this.order()).range([0, this.size()])
		}

		svg_title_text(cell: Matrix_cell) {
			if (!cell.cmt) return ''

			const text = `${cell.cmt}: ${cell.z}`
			const title = !this.heatmap()
				? `${text} ${cell.z === 1 ? 'entry' : 'entries'}`
				: text

			return title
		}

		cell_hovered(cell?: Matrix_cell | null) {
			$lib_d3.all().selectAll('.row text').classed('active', (_: any, index: number) => cell?.y === index)
			$lib_d3.all().selectAll('.column text').classed('active', (_: any, index: number) => cell?.x === index)
		}

		@ $mol_mem_key
		cell_selected(id: number, next?: boolean) {
			$mol_wire_solid()
			return next ?? false
		}

		@ $mol_action
		cell_click(cell: Matrix_cell) {
			const coords = [ $mol_coord_pack( cell.x, cell.y ), $mol_coord_pack( cell.y, cell.x ) ]
			coords.forEach( coord => this.cell_selected( coord, !this.cell_selected(coord) ) )
			$lib_d3.all().selectAll('.cell').classed('visited', (item: any) => this.cell_selected( $mol_coord_pack( item.x, item.y ) ))
			// if (visavis.mpds_embedded) {
			// 	window.open(window.location.protocol + '//' + window.location.host + '#search/binary%20' + term.cmt);
			// }
		}

		draw_cells(node: SVGElement, row: Matrix_cell[]) {
			$lib_d3.all().select(node)
				.selectAll('.cell')
				.data(row.filter((d: any) => d.z))
				.join('rect')
				.attr('class', (d: any) => d.nonformer ? 'nonformer cell' : 'cell')
				.attr('id', (d: any) => 'c_' + this.nodes()[d.x].num.toString() + '_' + this.nodes()[d.y].num.toString())
				.attr('x', (d: any) => this.range()(d.x) as any)
				.attr('width', this.range().bandwidth())
				.attr('height', this.range().bandwidth())
				.style('fill-opacity', (d: any) => this.opacity(d.z))
				.style('fill', (d: any) => this.color(d.z, d.cmp) )
				.on('mouseover', (event: MouseEvent, cell: unknown) => this.cell_hovered(cell as Matrix_cell))
				.on('mouseout', (event: MouseEvent) => this.cell_hovered(null))
				.on('click', (event: PointerEvent, cell: unknown) => this.cell_click(cell as Matrix_cell) )
				.append('svg:title').text((cell: any) => this.svg_title_text(cell))
		}

		@ $mol_mem
		draw() {
			if (Number.isNaN( this.size() )) return

			const svg = $lib_d3.all().select('[visavis_matrix_root]')
				.attr('width', this.size() + this.axis_width())
				.attr('height', this.size() + this.axis_width())
				.style('font-size', this.range().bandwidth())
				.style('letter-spacing', '1px')
			
			const group = svg
				[ svg.select('g').empty() ? 'append' : 'select' ]('g')
				.attr('transform', `translate(${this.axis_width()},${this.axis_width()})`)

			group.html("<defs><pattern id='nonformer' patternUnits='userSpaceOnUse' width='4' height='4'><path d='M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2' style='stroke:#ddd;stroke-width:1' /></pattern></defs>")
		
			group.append('rect')
				.attr('class', 'bgmatrix')
				.attr('width', this.size())
				.attr('height', this.size());

			const draw_cells = (node: any, row: Matrix_cell[]) => this.draw_cells(node, row)
		
			const row = group.selectAll('.row')
				.data(this.matrix())
				.join('g')
				.attr('class', 'row')
				.attr('transform', (d: any, i: number) => 'translate(0,' + this.range()(i as any) + ')' )
				.each(function (this: any, row: any) { draw_cells(this, row) })
		
			row.append('line')
				.attr('x2', this.size());
		
			row.append('text')
				.attr('x', -6)
				.attr('y', this.range().bandwidth() / 2)
				.attr('dy', '.32em')
				.attr('text-anchor', 'end')
				.text((d: any, i: any)=> this.nodes()[i].name)
				
			const column = group.selectAll('.column')
				.data(this.matrix())
				.join('g')
				.attr('class', 'column')
				.attr('transform', (d: any, i: any)=> 'translate(' + this.range()(i) + ')rotate(-90)');
		
			column.append('line')
				.attr('x1', -this.size());
		
			column.append('text')
				.attr('x', 6)
				.attr('y', this.range().bandwidth() / 2)
				.attr('dy', '.32em')
				.attr('text-anchor', 'start')
				.text((d: any, i: any) => this.nodes()[i].name);
		}

	}

}
