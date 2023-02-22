namespace $.$$ {

	const Label = (val: any) => {
		if (!Array.isArray(val)) return $mol_fail( new $mol_data_error( `${ val } is not a array` ) )
		if (val.length < 2 || val.length > 3) return $mol_fail( new $mol_data_error( `${ val } should have 2 or 3 items` ) )

		const check = { 0: val[0], 1: val[1], 2: val[2] }
		const obj = $mol_data_record({
			0: $mol_data_string,
			1: $mol_data_array($mol_data_number),
			2: $mol_data_nullable( $mol_data_number ),
		})(check)
		return Object.values(obj) as [string, number[], null | number]
	}

	const $visavis_phase_json = $mol_data_record({
		temp: $mol_data_array( $mol_data_number ),
		arity: $mol_data_number,
		entry: $mol_data_string,
		naxes: $mol_data_number,
		labels: $mol_data_array( Label ), // Array<[string, number[], null | number]>
		shapes: $mol_data_array($mol_data_record({
			kind: $mol_data_string,
			svgpath: $mol_data_string,
			label: $mol_data_optional($mol_data_string),
			phase: $mol_data_optional($mol_data_string),
			nphases: $mol_data_optional($mol_data_number),
			is_solid: $mol_data_optional($mol_data_boolean),
			phase_id: $mol_data_optional($mol_data_number),
			reflabel: $mol_data_optional($mol_data_number),
			chemical_elements: $mol_data_optional($mol_data_array($mol_data_string)),
		})),
		diatype: $mol_data_string,
		title_a: $mol_data_string,
		title_b: $mol_data_string,
		title_c: $mol_data_optional($mol_data_string),
		comp_a: $mol_data_optional( $mol_data_array( $mol_data_number ) ),
		comp_end: $mol_data_dict( $mol_data_number ),
		comp_range: $mol_data_array($mol_data_number),
		comp_start: $mol_data_dict( $mol_data_number ),
		chemical_elements: $mol_data_array($mol_data_string),
		object_repr: $mol_data_string,
		object_type: $mol_data_string,
		use_visavis_type: $mol_data_const('pd'),
	})

	export class $visavis_phase extends $.$visavis_phase {

		plot_title() {
			return this.plot().id()
		}

		json() {
			return $visavis_phase_json( this.plot().json() as any )
		}

		json_title_b() {
			return this.json().title_b
		}

		json_title_a() {
			return this.json().title_a
		}

		json_title_c() {
			return this.json().title_c!
		}

		json_comp_range() {
			return this.json().comp_range
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

		@ $mol_mem
		layout_shapes() {
			const list = this.json().shapes.map(obj => ({
				type: 'path',
				path: obj.svgpath,
				line: this.line()[obj.kind] ?? this.line().default,
				...obj.kind !== 'phase' && obj.kind !== 'compound' ? { fillOpacity: 0 } : {},
				...obj.kind === 'phase' ? {
					fillcolor: !obj.is_solid && obj.nphases === 1 ? this.colors_by_nphases().alt_1 : this.colors_by_nphases()[obj.nphases!] ?? this.colors_by_nphases().default
				} : {},
			}))

			return this.is_triangle() ? [this.triangle().layout.shape, ...list] : list
		}

		annotation_textangle(label: ReturnType<typeof Label>) {
			return label[0].replace(/<\/?sub>/g, '').length > 10 ? -65 : 0
		}

		@ $mol_mem
		annotations() {
			const list = this.json().labels.map(label => ({
				x: label[1][0],
				y: label[1][1],
				text: label[0],
				showarrow: this.annotation().show_arrow,
				font: this.annotation().font,
				textangle: this.annotation_textangle(label)
			}))

			return [
				...list,
				...this.json().title_c && this.json().arity > 2 && !this.data_demo() ? this.triangle_annotations() : [],
				...this.json().naxes === 2 ? this.rectangle_annotations() : [],
			]
		}

		@ $mol_mem
		draw() {
			this.Root().view_rect()

			return $lib_plotly.all().react(
				this.Root().dom_node() as HTMLElement,
				this.is_triangle() ? this.triangle().datamock : this.rectangle().datamock,
				this.is_triangle() ? this.triangle().layout : this.rectangle().layout,
				{displaylogo: false, displayModeBar: false, staticPlot: false},
			)
		}

	}
	
}
