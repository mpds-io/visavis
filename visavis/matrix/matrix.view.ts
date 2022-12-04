namespace $.$$ {

	type Matrix = {
		error: null | Error
		payload: {
			nodes: {
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
			}[],
			links: {
				source: number
				target: number
				value: number
				cmt: string
				cmp?: string
			}[],
			fixel: null,
		}
		answerto: string
		use_visavis_type: 'matrix'
	}

	export class $mpds_visavis_matrix extends $.$mpds_visavis_matrix {

		@ $mol_mem
		data() {
			return this.file() as Matrix
		}

		el_orders = {} as any

		heatcolors = ['rgb(150,0,90)', 'rgb(0,0,200)', 'rgb(0,25,255)', 'rgb(0,152,255)', 'rgb(44,255,150)', 'rgb(151,255,0)', 'rgb(255,234,0)', 'rgb(255,111,0)', 'rgb(255,0,0)']
		colorset = ['#3e3f95', '#c00', '#FE9A2E', '#090', '#f0f', '#09f', '#666', '#0f3', '#0ff', '#90c']

		@ $mol_mem
		render() {
			const d3 = $lib_d3.all()
			const is_integer = (num: number) => Math.floor(num) === num

			// const svgdim = Math.min(this.dom_node().clientWidth - this.dom_node().clientWidth / 12, this.dom_node().clientHeight - this.dom_node().clientHeight / 12);
			const svgdim = 800
		
			const matrix = [] as Array<{ x: number, y: number, z: number, cmt: string, cmp: string | number }[]>;
			const nodes = this.data().payload.nodes;
			let minvalue = 1;
			let maxvalue = 1;
			let heatmap = false;
			const actual_w = svgdim + 24 + 0;
		
			const svg = d3.select<SVGSVGElement, unknown>("mpds_visavis_matrix").append("svg")
				.attr("width", actual_w)
				.attr("height", svgdim + 26 + 0)
				.style('position', 'absolute')
				.style('left', '50%')
				.style('font-size', '1.1vmin')
				.style('letter-spacing', '1px')
				.style('margin-left', -actual_w / 2 + 'px')
				.append("g")
				.attr("transform", "translate(" + 24 + "," + 26 + ")");
		
			// compute index per node
			nodes.forEach(function (node, i) {
				node.count = 0;
				matrix[i] = d3.range(95).map(function (j) {
					return { x: j, y: i, z: 0, cmt: "", cmp: 0 };
				});
			});
		
			// convert links to matrix, count character occurrences
			this.data().payload.links.forEach(function (link) {
				matrix[link.source][link.target].z += link.value;
				matrix[link.target][link.source].z += link.value; // NB only AB-all
				matrix[link.source][link.target].cmt = link.cmt;
				matrix[link.target][link.source].cmt = link.cmt; // NB only AB-all
				matrix[link.source][link.target].cmp = link.cmp || 0;
				matrix[link.target][link.source].cmp = link.cmp || 0;
		
				nodes[link.source].count! += link.value;
				nodes[link.target].count! += link.value; // NB only AB-all
		
				if (link.value < minvalue) minvalue = link.value;
				else if (link.value > maxvalue) maxvalue = link.value;
		
				if (!heatmap && !is_integer(link.value)) heatmap = true;
				else if (link.cmp) heatmap = false;
			});
		
			// if (visavis.nonformers_shown) {
			// 	visavis.pd_bin_nonformers.forEach(function (item) {
			// 		matrix[item[0]][item[1]].z = 1;
			// 		matrix[item[1]][item[0]].z = 1; // NB only AB-all
			// 		matrix[item[0]][item[1]].nonformer = true;
			// 		matrix[item[1]][item[0]].nonformer = true; // NB only AB-all
			// 	});
			// }
		
			//console.log(matrix);
			//console.log('Heatmap mode: ' + heatmap);
			
			// precompute the orders
			['num', 'nump', 'size', 'rea', 'rpp', 'rion', 'rcov', 'rmet', 'tmelt', 'eneg'].forEach(order => {
				if (!this.el_orders[order])
					this.el_orders[order] = d3.range(95).sort(function (a, b) { return nodes[a][order] - nodes[b][order] })
			});
			this.el_orders.count = d3.range(95).sort((a, b) => nodes[b].count! - nodes[a]!.count!)
		
			// set the default sort order (also in GUI logic: *rebuild_visavis* TODO)
			// const arrange = d3.scaleOrdinal().domain(this.el_orders.nump).range([0, svgdim])
			const arrange2 = d3.scaleBand().domain(this.el_orders.nump).range([0, svgdim])
			// bandwidth():
		
			const setopac = heatmap ? ()=>1 : d3.scaleLinear().domain([minvalue, maxvalue]).range([0.2, 1]).clamp(true)
		
			const heatmap_color = d3.scaleLinear().domain(d3.range(0, 1, 1.0 / (this.heatcolors.length - 1))).range(this.heatcolors as any)

			const scale_color = d3.scaleLinear().domain([minvalue, maxvalue]).range([0, 1])

			const setcolor = heatmap
				? (d: any, cmp: any)=> cmp ? this.colorset[1] : heatmap_color(scale_color(d))
				: (d: any, cmp: any)=> this.colorset[cmp] || '#ccc'
		
			svg.html('<defs><pattern id="nonformer" patternUnits="userSpaceOnUse" width="4" height="4"><path d="M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2" style="stroke:#ddd;stroke-width:1" /></pattern></defs>');
		
			svg.append("rect")
				.attr("class", "bgmatrix")
				.attr("width", svgdim)
				.attr("height", svgdim);
		
			// Generate matrix html as follows:
			// g.row: (horizontal)   <<< y_arrange
			// -> line
			// -> text (element by Y)
			// -> rect.cell x N   <<< x_arrange
			//
			// g.column: (vertical)   <<< x_arrange
			// -> line
			// -> text (element by X)
			const row = svg.selectAll(".row")
				.data(matrix)
				.enter().append("g")
				.attr("class", "row")
				.attr("transform", function (d: typeof matrix[number], i: number) { return "translate(0," + arrange2(i as any) + ")" })
				.each(process);
		
			row.append("line")
				.attr("x2", svgdim);
		
			row.append("text")
				.attr("x", -6)
				.attr("y", arrange2.bandwidth() / 2)
				.attr("dy", ".32em")
				.attr("text-anchor", "end")
				.text((d, i)=> nodes[i].name);
		
			const column = svg.selectAll(".column")
				.data(matrix)
				.enter().append("g")
				.attr("class", "column")
				.attr("transform", (d, i)=> "translate(" + arrange2(i as any) + ")rotate(-90)");
		
			column.append("line")
				.attr("x1", -svgdim);
		
			column.append("text")
				.attr("x", 6)
				.attr("y", arrange2.bandwidth() / 2)
				.attr("dy", ".32em")
				.attr("text-anchor", "start")
				.text(function (d, i) { return nodes[i].name });
		
			// hide_preloader();
			// hide_messages();
			// if (heatmap) document.getElementById('heatmaplegend').style.display = 'block';
			//if (visavis.mpds_embedded) document.getElementById('expander').style.display = 'block';
		
			// if (!visavis.cmp_shown) {
			// 	document.getElementById('nonformers').style.display = 'block';
			// 	document.getElementById('nonformers_shown').checked = visavis.nonformers_shown;
			// 	if (visavis.fixel_shown) document.getElementById('fixel').style.display = 'block';
			// }
		
			function process(this: any, row: any) {
				const cell = d3.select(this).selectAll(".cell")
					.data(row.filter((d: any) => d.z))
					.enter().append("rect")
					.attr("class", function (d: any) { return d.nonformer ? "nonformer cell" : "cell" })
					.attr("id", function (d: any) { return "c_" + nodes[d.x].num.toString() + "_" + nodes[d.y].num.toString() })
					.attr("x", function (d: any) { return arrange2(d.x) as any })
					.attr("width", arrange2.bandwidth())
					.attr("height", arrange2.bandwidth())
					.style("fill-opacity", function (d: any) { return setopac(d.z) })
					.style("fill", function (d: any) { return setcolor(d.z, d.cmp) })
					// .on("mouseover", mouseover)
					// .on("mouseout", mouseout)
					// .on("click", click_search)
					.append("svg:title").text(function (d: any) {
						if (!d.cmt) return "";
						let capt = d.cmt + ": " + d.z;
						if (!heatmap) capt += " " + ((d.z == 1) ? "entry" : "entries");
						return capt;
					});
			}
		
			// function mouseover(p) {
			// 	Plotly.d3.selectAll(".row text").classed("active", function (d, i) { return i == p.y });
			// 	Plotly.d3.selectAll(".column text").classed("active", function (d, i) { return i == p.x });
			// }
		
			// function mouseout() {
			// 	Plotly.d3.selectAll("text").classed("active", false);
			// }
		
			// function click_search(term) {
			// 	const ids = Plotly.d3.select(this).attr("id").substr(2).split("_");
			// 	document.getElementById("c_" + ids[1] + "_" + ids[0]).classList.add('visited');
			// 	document.getElementById("c_" + ids[0] + "_" + ids[1]).classList.add('visited');
			// 	if (visavis.mpds_embedded) {
			// 		window.open(window.location.protocol + "//" + window.location.host + '#search/binary%20' + term.cmt);
			// 	}
			// }

		}

		auto() {
			this.render()
		}

	}

}
