namespace $.$$ {

	const d3 = $mpds_visavis_lib_plotly.d3

	const Link = $mol_data_record({
		source: $mol_data_string,
		type: $mol_data_string,
		target: $mol_data_variant( $mol_data_string, $mol_data_number ),
	})

	type Link = ReturnType<typeof Link>

	type Node = {
		name: string
		index?: number
		px?: number
		py?: number
		weight?: number
		x?: number
		y?: number
	}

	type Edge = {
		source: Node,
		type: string,
		target: Node,
	}

	export const $mpds_visavis_plot_graph_json = $mol_data_record({
		error: $mol_data_nullable( $mol_data_string ),
		warning: $mol_data_nullable( $mol_data_string ),
		graph_rel: $mol_data_string,
		payload: $mol_data_array( Link ),
	})

	export class $mpds_visavis_plot_graph extends $.$mpds_visavis_plot_graph {

		@ $mol_mem
		json() {
			return $mpds_visavis_plot_graph_json( this.plot_raw().jsons()[0] )
		}

		plot_title() {
			return this.plot_raw().id()
		}

		@ $mol_mem
		data() {
			const json = this.json()

			const nodes: Record<string, Node > = {}
			const edges: Edge[] = []

			const labels: Record<string, string> = {}
			const radii: Record<string, number> = {}
			const foci: Record<string, string> = {}
			let counter = 0

			const visavis_cache = {ref: json.payload, type: 'graph'};
			const graph_rel = this.graph_rel() || json.graph_rel || 'prel';

			// filter edges and compute the distinct nodes from the links
			visavis_cache.ref.forEach( (link) => {
				if (link.type == graph_rel){
					foci[link.source] = link.source.slice(0, 1); // setting default color
					const sourceNode = nodes[link.source] || (nodes[link.source] = {name: link.source});
					const targetNode = nodes[link.target] || (nodes[link.target] = {name: String(link.target)});
					const lrep = { source: sourceNode, type: link.type, target: targetNode };
					edges.push(lrep);
					counter++;

				} else if (link.type == 'label'){
					labels[link.source] = String(link.target);

				} else if (link.type == 'radius'){
					const radius = Math.min($mol_data_number(link.target as number), 36)
					radii[link.source] = radius + 2;
				}
			});
			if (!counter) return $mol_fail( new $mol_data_error('Warning: nothing to show') )

			const circle_cls = graph_rel.slice(0, 1)
			const text_cls = (counter > 25) ? "micro" : "macro"

			const table: Record<string, number> = {}

			Object.keys(nodes).forEach( ( p,i ) => {
				table[p] = i++;
			})

			return { nodes, edges, labels, radii, foci, table, circle_cls, text_cls }
		}

		@ $mol_mem
		view_box() {
			if ( ! this.view_rect() ) return '0 0 0 0'

			const [ pan_x, pan_y ] = this.pan()
			const { width, height } = this.view_rect()!
			const x = pan_x + width / 2
			const y = pan_y + height / 2
			return `${ - x } ${ - y } ${ width } ${ height }`
		}

		@ $mol_mem
		draw() {
			// var width = predefined_h ? document.body.clientWidth : document.body.clientWidth - 15,
			// 	height = predefined_h || parseInt(0.8 * width);

			const { nodes, edges, labels, radii, foci, table, circle_cls, text_cls } = this.data()

			const svg_element = this.Root().dom_node()
			const svg = d3.select(svg_element)

			const force = d3.layout.force()
				.nodes(d3.values(nodes))
				.links(edges)
				.linkDistance(90)
				.gravity(0.3)
				.charge(-2500)
				.on("tick", tick)

			const drag = force.drag()
				.on("dragstart", function(this: any, d: any){
					d3.select(this).classed("fixed", d.fixed = true);
				});

			const path = svg.append("g").selectAll("path")
				.data(force.links())
				.enter().append("path")
				.attr("class", function(d: any){ return "edge " + d.type; });

			const circle = svg.append("g").selectAll("circle")
				.data(force.nodes())
				.enter().append("circle")
				.attr("r", function(d: any, i: any){ return radii[d.name] || 10 })
				.attr("id", function(d: any, i: any){ return "c_" + table[d.name] })
				.attr("class", function(d: any, i: any){ return foci[d.name] || circle_cls })
				.on("mouseenter", ()=> this.allow_pan( false ))
				.on("mouseleave", ()=> this.allow_pan( true ))
				.call(drag);

			const text = svg.append("g").selectAll("g")
				.data(force.nodes())
				.enter().append("g");

			// a copy of the text with a thick white stroke for legibility
			text.append("text")
				.attr("x", -20)
				.attr("y", -10)
				.attr("class", "shadow " + text_cls)
				.attr("id", function(d: any, i: any){ return "s_" + table[d.name] })
				.html(function(d: any){ return labels[d.name] });

			text.append("text")
				.attr("x", -20)
				.attr("y", -10)
				.attr("class", "captions " + text_cls)
				.attr("id", function(d: any, i: any){ return "t_" + table[d.name] })
				.html(function(d: any){ return labels[d.name] })
				.on("mouseenter", ()=> this.allow_pan( false ))
				.on("mouseleave", ()=> this.allow_pan( true ))
				.call(drag);

			text.on("click", (d: any)=> {
				const graph_mapping = {f: 'formulae', p: 'props', h: 'aetypes', t: 'lattices', a: 'codens', g: 'geos'}; //global const?
				const found_fct = (graph_mapping as Record<string, string>)[ d.name.charAt(0) ]
				const label = labels[d.name];

				this.graph_click( { facet: found_fct, label } )
			});

			function tick(){
				path.attr("d", direct);
				circle.attr("transform", transform);
				text.attr("transform", transform);
			}

			function direct(d: Edge){
				return "M" + d.source.x + "," + d.source.y + " " + d.target.x + "," + d.target.y;
			}

			function transform(d: Node){
				return "translate(" + d.x + "," + d.y + ")";
			}

			force.start()
			for (var i = 400; i > 0; i--) force.tick()
			force.stop()

			// hide_preloader();
			// hide_messages();
			// warn_demo();
			// if (visavis.mpds_embedded) document.getElementById('expander').style.display = 'block';

		}

	}

}
