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

	export class $mpds_visavis_matrix extends $.$mpds_visavis_matrix {

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

		@ $mol_mem_key
		order(order: 'num' | 'nump' | 'size' | 'rea' | 'rpp' | 'rion' | 'rcov' | 'rmet' | 'tmelt' | 'eneg') {
			return d3.range(95).sort( (a, b) => this.nodes()[a][order] - this.nodes()[b][order] )
		}

		@ $mol_mem
		matrix() {
			const matrix: Matrix_cell[][] = this.nodes().map( (node, i) => d3.range(95).map( j => ({ x: j, y: i, z: 0, cmt: "", cmp: 0, nonformer: false }) ) )

			for (const link of this.links()) {
				matrix[link.source][link.target].z += link.value;
				matrix[link.target][link.source].z += link.value; // NB only AB-all
				matrix[link.source][link.target].cmt = link.cmt;
				matrix[link.target][link.source].cmt = link.cmt; // NB only AB-all
				matrix[link.source][link.target].cmp = link.cmp || 0;
				matrix[link.target][link.source].cmp = link.cmp || 0;
			}

			if (this.nonformers()) {
				for (const item of $mpds_visavis_nonformer_pd_bin) {
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
			// const { width, height } = this.dom_node().getBoundingClientRect()
			// return Math.min(width - width / 12, height - height / 12);
			return 800
		}

		@ $mol_mem
		opacity_scale() {
			return d3.scaleLinear().domain([this.links_value_min(), this.links_value_max()]).range([0.2, 1]).clamp(true)
		}

		opacity(index: number) {
			return this.heatmap() ? 1 : this.opacity_scale()(index)
		}

		@ $mol_mem
		color_heatmap() {
			return d3.scaleLinear().domain(d3.range(0, 1, 1.0 / (this.heatmap_colors().length - 1))).range(this.heatmap_colors() as any)
		}

		heatmap_color( index: number ) {
			return this.heatmap_colors()[index]
		}

		heatmap_color_list() {
			return this.heatmap_colors().map( (_, index) => this.Heatmap_color(index) )
		}

		@ $mol_mem
		color_heatmap_scale() {
			return d3.scaleLinear().domain([this.links_value_min(), this.links_value_max()]).range([0, 1])
		}

		color(index: number, cmp: number) {
			if (this.heatmap()) return cmp ? this.colorset()[1] : this.color_heatmap()( this.color_heatmap_scale()( index ) )
			return this.colorset()[cmp] || '#ccc'
		}

		@ $mol_mem
		range() {
			return d3.scaleBand().domain(this.order('nump') as any).range([0, this.size()])
		}

		svg_title_text(cell: Matrix_cell) {
			if (!cell.cmt) return ''

			const text = `${cell.cmt}: ${cell.z}`
			const title = !this.heatmap()
				? `${text} ${cell.z === 1 ? 'entry' : 'entries'}`
				: text

			return title
		}

		@ $mol_mem
		cell_hovered(next?: Matrix_cell | null) {
			$lib_d3.all().selectAll(".row text").classed("active", (_, index) => next?.y === index)
			$lib_d3.all().selectAll(".column text").classed("active", (_, index) => next?.x === index)
			return next ?? null
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
			$lib_d3.all().selectAll(".cell").classed("visited", (item: any) => this.cell_selected( $mol_coord_pack( item.x, item.y ) ))

			// if (visavis.mpds_embedded) {
			// 	window.open(window.location.protocol + "//" + window.location.host + '#search/binary%20' + term.cmt);
			// }
		}

		svg_margin_left() {
			return -this.size()/2 + 'px'
		}

		@ $mol_mem
		svg() {
			const svg = $lib_d3.all().select<SVGSVGElement, unknown>("[mpds_visavis_matrix_plot]").append("svg")
				.attr("width", this.size())
				.attr("height", this.size())
				.style('position', 'absolute')
				.style('left', '50%')
				.style('font-size', '1.1vmin')
				.style('letter-spacing', '1px')
				.style('margin-left', -this.size()/ 2 + 'px')
				.append("g")
				.attr("transform", "translate(" + 24 + "," + 26 + ")");
		
			svg.html('<defs><pattern id="nonformer" patternUnits="userSpaceOnUse" width="4" height="4"><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" style="stroke:#ddd;stroke-width:1" /></pattern></defs>');
		
			svg.append("rect")
				.attr("class", "bgmatrix")
				.attr("width", this.size())
				.attr("height", this.size());

			return svg
		}

		@ $mol_mem
		draw() {
			const svg = this.svg()

			const process = (node: any, row: any) => {
				$lib_d3.all().select(node).selectAll(".cell")
					.data(row.filter((d: any) => d.z))
					.enter().append("rect")
					.attr("class", (d: any) => d.nonformer ? "nonformer cell" : "cell")
					.attr("id", (d: any) => "c_" + this.nodes()[d.x].num.toString() + "_" + this.nodes()[d.y].num.toString())
					.attr("x", (d: any) => this.range()(d.x) as any)
					.attr("width", this.range().bandwidth())
					.attr("height", this.range().bandwidth())
					.style("fill-opacity", (d: any) => this.opacity(d.z))
					.style("fill", (d: any) => this.color(d.z, d.cmp) )
					.on('mouseover', (event: MouseEvent, cell: unknown) => this.cell_hovered(cell as Matrix_cell))
					.on('mouseout', (event: MouseEvent) => this.cell_hovered(null))
					.on("click", (event: PointerEvent, cell: unknown) => this.cell_click(cell as Matrix_cell) )
					.append("svg:title").text(cell => this.svg_title_text(cell as any))
			}
		
			const row = svg.selectAll(".row")
				.data(this.matrix())
				.enter().append("g")
				.attr("class", "row")
				.attr("transform", (d: any, i: number) => "translate(0," + this.range()(i as any) + ")" )
				.each(function(this: Element, row: any) { process(this, row) });
		
			row.append("line")
				.attr("x2", this.size());
		
			row.append("text")
				.attr("x", -6)
				.attr("y", this.range().bandwidth() / 2)
				.attr("dy", ".32em")
				.attr("text-anchor", "end")
				.text((d, i)=> this.nodes()[i].name)
				
			const column = svg.selectAll(".column")
				.data(this.matrix())
				.enter().append("g")
				.attr("class", "column")
				.attr("transform", (d, i)=> "translate(" + this.range()(i as any) + ")rotate(-90)");
		
			column.append("line")
				.attr("x1", -this.size());
		
			column.append("text")
				.attr("x", 6)
				.attr("y", this.range().bandwidth() / 2)
				.attr("dy", ".32em")
				.attr("text-anchor", "start")
				.text((d, i) => this.nodes()[i].name);
		}

		auto() {
			this.draw()
		}

	}

}
