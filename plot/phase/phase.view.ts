namespace $.$$ {

	const Label_json = ( val: any ) => {
		if( !Array.isArray( val ) ) return $mol_fail( new $mol_data_error( `${ val } is not a array` ) )
		if( val.length < 2 || val.length > 3 ) return $mol_fail( new $mol_data_error( `${ val } should have 2 or 3 items` ) )

		const check = { 0: val[ 0 ], 1: val[ 1 ], 2: val[ 2 ] }
		const obj = $mol_data_record( {
			0: $mol_data_string,
			1: $mol_data_array( $mol_data_number ),
			2: $mol_data_nullable( $mol_data_number ),
		} )( check )
		return Object.values( obj ) as [ string, number[], null | number ]
	}

	// source https://developer.mpds.io/mpds.schema.json#/definitions/phase_diagram
	const $visavis_plot_phase_rect_json = $mol_data_record( {
		// both
		naxes: $mol_data_number,
		arity: $mol_data_number,
		diatype: $mol_data_string,
		chemical_elements: $mol_data_array( $mol_data_string ),
		temp: $mol_data_array( $mol_data_number ),
		labels: $mol_data_array( Label_json ), // Array<[string, number[], null | number]>
		shapes: $mol_data_array( $mol_data_record( {
			kind: $mol_data_string,
			svgpath: $mol_data_string,
			label: $mol_data_optional( $mol_data_string ),
			phase: $mol_data_optional( $mol_data_string ),
			nphases: $mol_data_optional( $mol_data_number ),
			is_solid: $mol_data_optional( $mol_data_boolean ),
			phase_id: $mol_data_optional( $mol_data_number ),
			reflabel: $mol_data_optional( $mol_data_number ),
			chemical_elements: $mol_data_optional( $mol_data_array( $mol_data_string ) ),
		} ) ),
		entry: $mol_data_string,
		object_type: $mol_data_string,
		use_visavis_type: $mol_data_const( 'pd' ),
		
		title_a: $mol_data_optional( $mol_data_string ),
		title_b: $mol_data_optional( $mol_data_string ),
		object_repr: $mol_data_optional( $mol_data_string ),
		// rect
		comp_end: $mol_data_optional( $mol_data_dict( $mol_data_number ) ),
		comp_range: $mol_data_optional( $mol_data_array( $mol_data_number ) ),
		comp_start: $mol_data_optional( $mol_data_dict( $mol_data_number ) ),
		// triangle
		title_c: $mol_data_optional( $mol_data_string ),
		comp_a: $mol_data_optional( $mol_data_dict( $mol_data_number ) ),
		comp_b: $mol_data_optional( $mol_data_dict( $mol_data_number ) ),
		comp_c: $mol_data_optional( $mol_data_dict( $mol_data_number ) ),
		range_a: $mol_data_optional( $mol_data_array( $mol_data_number ) ),
		range_b: $mol_data_optional( $mol_data_array( $mol_data_number ) ),
		range_c: $mol_data_optional( $mol_data_array( $mol_data_number ) ),
	} )

	function get_rect_pd_compound( comp: any, obj_left: any, obj_right: any ) {
		const els = Object.keys( obj_left ).sort()
		let formula = ''
		let coeff = 0

		els.forEach( function( el ) {
			if( obj_right[ el ] == obj_left[ el ] )
				formula += el + ' × ' + obj_left[ el ].toFixed( 2 ) + ', '

			else if( obj_right[ el ] > obj_left[ el ] ) {
				coeff = obj_left[ el ] + comp * ( obj_right[ el ] - obj_left[ el ] )
				coeff = Math.round( coeff * 100 ) / 100
				if( !coeff ) return
				formula += el + ' × ' + coeff.toFixed( 2 ) + ', '

			} else {
				coeff = obj_left[ el ] - ( comp * ( obj_left[ el ] - obj_right[ el ] ) )
				coeff = Math.round( coeff * 100 ) / 100
				if( !coeff ) return
				formula += el + ' × ' + coeff.toFixed( 2 ) + ', '
			}
		} )

		return formula.slice( 0, formula.length - 2 )
	}

	function get_tri_pd_compound( a: any, b: any, c: any, obj_a: any, obj_b: any, obj_c: any ) {
		const els = Object.keys( obj_a ).sort()
		let formula = ''
		let coeff = 0

		els.forEach( function( el ) {
			coeff = Math.round( ( obj_a[ el ] * a + obj_b[ el ] * b + obj_c[ el ] * c ) * 100 ) / 100
			if( !coeff ) return
			formula += el + ' &times; ' + coeff.toFixed( 2 ) + ', '
		} )

		return formula.slice( 0, formula.length - 2 )
	}

	export function inside_triangle( x: number, y: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number ) {
		function fAB( x: number, y: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number ) {
			return ( y - y1 ) * ( x2 - x1 ) - ( x - x1 ) * ( y2 - y1 )
		}

		function fBC( x: number, y: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number ) {
			return ( y - y2 ) * ( x3 - x2 ) - ( x - x2 ) * ( y3 - y2 )
		}

		function fCA( x: number, y: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number ) {
			return ( y - y3 ) * ( x1 - x3 ) - ( x - x3 ) * ( y1 - y3 )
		}

		if( fAB( x, y, x1, y1, x2, y2, x3, y3 ) * fBC( x, y, x1, y1, x2, y2, x3, y3 ) > 0 && fBC( x, y, x1, y1, x2, y2, x3, y3 ) * fCA( x, y, x1, y1, x2, y2, x3, y3 ) > 0 ) return true
		else return false
	}

	export function cartesian_to_ternary( x: number, y: number ) {
		const b = y / ( Math.sqrt( 3 ) / 2 ),
			a = 1 - ( x + ( y / Math.sqrt( 3 ) ) ),
			c = 1 - a - b
		return [ a, b, c ]
	}

	// TODO FIXME this should be done on the server
	export function fix_comp_impossible( comp_range: any, obj_left: any, obj_right: any ) {
		if( comp_range[ 1 ] - comp_range[ 0 ] == 100 ) return false

		const els = Object.keys( obj_left )
		let count = 0
		let fixed = {} as any

		if( els.length > 2 )
			return false

		for( const el in obj_left ) {
			if( ( obj_right[ el ] == 0 && obj_left[ el ] == 1 ) || ( obj_left[ el ] == 0 && obj_right[ el ] == 1 ) )
				count++
		}

		if( count == els.length ) {
			fixed = { comp_start: obj_left, comp_end: obj_right }

			if( fixed.comp_start[ els[ 0 ] ] == 0 ) {
				fixed.comp_start[ els[ 0 ] ] = comp_range[ 0 ] / 100
				fixed.comp_start[ els[ 1 ] ] = 1 - ( comp_range[ 0 ] / 100 )
				fixed.comp_end[ els[ 0 ] ] = comp_range[ 1 ] / 100
				fixed.comp_end[ els[ 1 ] ] = 1 - ( comp_range[ 1 ] / 100 )
			} else {
				fixed.comp_start[ els[ 0 ] ] = 1 - ( comp_range[ 0 ] / 100 )
				fixed.comp_start[ els[ 1 ] ] = comp_range[ 0 ] / 100
				fixed.comp_end[ els[ 0 ] ] = 1 - ( comp_range[ 1 ] / 100 )
				fixed.comp_end[ els[ 1 ] ] = comp_range[ 1 ] / 100
			}
			return fixed
		}
		return false
	}

	export class $visavis_plot_phase extends $.$visavis_plot_phase {

		json() {
			return $visavis_plot_phase_rect_json( this.plot_raw().json() as any )
		}

		json_title_b() {
			return this.json().title_b ?? ''
		}

		json_title_a() {
			return this.json().title_a ?? ''
		}

		json_title_c() {
			return this.json().title_c ?? ''
		}

		json_comp_range() {
			return this.json().comp_range ?? []
		}

		json_temp() {
			return this.json().temp
		}

		data_demo() {
			return !this.json().comp_a && !this.json().comp_start
		}

		show_ticks() {
			return this.json().labels.length > 0
		}

		is_triangle() {
			return this.json().naxes === 3
		}

		@$mol_mem
		layout_shapes() {
			const list = this.json().shapes.map( obj => ( {
				type: 'path',
				path: obj.svgpath,
				line: (this.line() as any)[ obj.kind ] ?? this.line().default,
				...obj.kind !== 'phase' && obj.kind !== 'compound' ? { fillOpacity: 0 } : {},
				...obj.kind === 'phase' ? {
					fillcolor: !obj.is_solid && obj.nphases === 1 ? this.colors_by_nphases().alt_1 : (this.colors_by_nphases() as any)[ obj.nphases! ] ?? this.colors_by_nphases().default
				} : {},
			} ) )

			return this.is_triangle() ? [ this.triangle_shape_fix(), ...list ] : list
		}

		annotation_textangle( label: ReturnType<typeof Label_json> ) {
			return label[ 0 ].replace( /<\/?sub>/g, '' ).length > 10 ? -65 : 0
		}

		@$mol_mem
		annotations() {
			const list = this.json().labels.map( label => ( {
				x: label[ 1 ][ 0 ],
				y: label[ 1 ][ 1 ],
				text: label[ 0 ],
				showarrow: this.annotation().show_arrow,
				font: this.annotation().font,
				textangle: this.annotation_textangle( label )
			} ) )

			return [
				...list,
				...this.json().title_c && this.json().arity > 2 && !this.data_demo() ? this.triangle_annotations() : [],
				...this.json().naxes === 2 ? this.rectangle_annotations() : [],
			]
		}

		mouseover() {
			const that = $lib_d3.all().select( this )
			console.log( that )
			const idx = that.attr( 'data-index' )

			// if (json.naxes == 3){
			// if (idx == 0) return false;
			// idx--;
			// }

			that.attr( 'data-state', that.style( 'fill' ) )
			that.style( { 'cursor': 'pointer', 'fill': '#3e3f95' } )
		}

		mouseout() {}

		click() {}

		mousemove() {}

		@$mol_action
		subscribe_events() {
			const d3 = $lib_d3.all()
			console.log('is trinagle', this.is_triangle())

			if ( this.is_triangle() ) this.pd_fix_triangle()

			// skip unsupported PD types
			if ( this.json().diatype && this.json().diatype.indexOf( 'projection' ) !== -1 ) return

			const json = this.json()
			const is_triangle = this.is_triangle()

			const figures = d3.selectAll('[visavis_plot_phase_root] .shapelayer path')
			figures.on('mouseover', function(this: any) {
				const that = d3.select(this)
				let idx = that.attr('data-index')

				if (is_triangle){
					if (idx == 0) return false;
					idx--;
				}

				that.attr('data-state', that.style('fill'));
				that.style('cursor', 'pointer');
				that.style('fill', '#3e3f95');

				const reflabel = json.shapes[idx]?.reflabel
				if (reflabel !== undefined && json.labels[reflabel] !== undefined){
					d3.select(`g.annotation[data-index="'${reflabel}'"]`).select('text').style('fill', '#f30');
				}
				// original
				// if (visavis.pd_phases[idx] !== undefined && json.labels[visavis.pd_phases[idx]] !== undefined){
				// 	Plotly.d3.select('g.annotation[data-index="' + visavis.pd_phases[idx] + '"]').select('text').style('fill', '#f30');
				// }
			})

			figures.on('mouseout', function(this: any) {
				const that = d3.select(this)
				const state = that.attr('data-state')

				if (state){
					that.style('fill', state)
					that.style('cursor', 'default')
					d3.selectAll('[visavis_plot_phase_root] g.annotation').select('text').style('fill', '#000');
				}
			})

			const canvas = this.Root().dom_node().firstChild as any

			// rectangle
			if (!this.is_triangle()) {
				const fixed = fix_comp_impossible(json.comp_range, json.comp_start, json.comp_end);
				const comp_start = fixed?.comp_start ?? json.comp_start
				const comp_end = fixed?.comp_end ?? json.comp_end

				const xaxis = canvas._fullLayout.xaxis
				const yaxis = canvas._fullLayout.yaxis
				const margin_l = canvas._fullLayout.margin.l
				const margin_t = canvas._fullLayout.margin.t

				const self = this

				canvas.addEventListener('mousemove', $mol_wire_async((evt: any) => {
					const comp = xaxis.p2c(evt.layerX - margin_l)
					const temp = parseInt(yaxis.p2c(evt.layerY - margin_t));

					if (comp > json.comp_range![0] && comp < json.comp_range![1] && temp > json.temp[0] && temp < json.temp[1]){
						const label = get_rect_pd_compound((comp - json.comp_range![0]) / (json.comp_range![1] - json.comp_range![0]), comp_start, comp_end) + ' at T = ' + temp + ' °C';
						self.label(label)
					} else {
						self.label('')
					}
				}))
			}
		}

		@$mol_mem
		data() {
			const { datamock } = this.is_triangle() ? this.triangle() : this.rectangle()
			return datamock
		}
		
		@$mol_mem
		layout() {
			const { layout } = this.is_triangle() ? this.triangle() : this.rectangle()			
			return layout
		}

		pd_fix_triangle() {
			const d3 = $lib_d3.all()

			function make_absolute_context( element: SVGGraphicsElement, root: HTMLElement ) {
				return function( x: number, y: number ) {
					var offset = root.getBoundingClientRect()
					var matrix = element.getScreenCTM()
					return {
						x: ( matrix!.a * x ) + ( matrix!.c * y ) + matrix!.e - offset.left,
						y: ( matrix!.b * x ) + ( matrix!.d * y ) + matrix!.f - offset.top
					}
				}
			}

			function get_absolute_coords( el: SVGGraphicsElement, ref: HTMLElement ) {
				const fn = make_absolute_context( el, ref )
				const b = el.getBBox()
				return fn( b.x, b.y )
			}

			const svgroot = d3.select( "[visavis_plot_phase_root] svg.main-svg" )[ 0 ][ 0 ] // window
			let graph_node = d3.select( "[visavis_plot_phase_root] g.toplevel.plotbg" )[ 0 ][ 0 ] // graph frame
			const graph_coords = get_absolute_coords( graph_node, svgroot )
			const svg_el = d3.select( "[visavis_plot_phase_root] g.layer-above" ) // actual drawing
			let svg_node = svg_el[ 0 ][ 0 ]

			graph_node = graph_node.getBoundingClientRect()
			svg_node = svg_node.getBoundingClientRect()

			const scaleX = graph_node.width / svg_node.width
			const scaleY = graph_node.height / svg_node.height
			const centerX = graph_coords.x + graph_node.width / 2
			const centerY = graph_coords.y + graph_node.height // NB!

			const origdims = [] as number[]

			d3.selectAll( "[visavis_plot_phase_root] text.annotation-text" ).each( function( this: any ) {
				origdims.push( parseInt( this.getBoundingClientRect().left ) )
			} )

			svg_el.attr( "transform", "translate(" + ( -centerX * ( scaleX - 1 ) ) + ", " + ( -centerY * ( scaleY - 1 ) ) + ") scale(" + scaleX + ", " + scaleY + ")" )

			d3.selectAll( "[visavis_plot_phase_root] g.annotation" ).each( function( this: any, d: any, i: any ) {
				d3.select( this ).attr( "transform", "translate(" + ( -centerX * ( scaleX - 1 ) ) + ", " + ( -centerY * ( scaleY - 1 ) ) + ") scale(" + scaleX + ", " + scaleY + ") translate(" + ( -origdims[ i ] / 1.25 ) + ", 0) scale(1.75, 1)" )
			} )
		}

	}

}
