namespace $.$$ {

	const Elements_list = $mol_data_array(
		$mol_data_record({
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
		})
	)

	class Elements {

		@ $mol_mem
		list() {
			const tree = $$.$mol_tree2_from_string( $mol_fetch.text( '/visavis/elements/data/elements.json.tree' ) )
			const json: any = $$.$mol_tree2_to_json( tree )
			return Elements_list( json )
		}

		@ $mol_mem_key
		by_num(num: number) {
			return this.list()[ num ]
		}

	}

	export const $visavis_elements = new Elements()

}
