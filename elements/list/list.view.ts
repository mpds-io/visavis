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

	const Prop_names = $mol_data_record({
		num: $mol_data_string,
		nump: $mol_data_string,
		size: $mol_data_string,
		rea: $mol_data_string,
		rpp: $mol_data_string,
		rion: $mol_data_string,
		rcov: $mol_data_string,
		rmet: $mol_data_string,
		tmelt: $mol_data_string,
		eneg: $mol_data_string,
	})

	export class $mpds_visavis_elements_list extends $.$mpds_visavis_elements_list {
		
		@ $mol_mem
		static data() {
			return new $mpds_visavis_elements_list()
		}

		@ $mol_mem
		static prop_names() {
			return Prop_names( this.data().prop_names() )
		}

		@ $mol_mem
		static list() {
			return Elements_list( this.data().list() )
		}

		@ $mol_mem_key
		static index_by_prop( prop: keyof typeof Elements_list.Value[number] ) {
			return Object.fromEntries( this.list().map( el => [ el[prop], el ] ) )
		}

		@ $mol_mem_key
		static element_by_num(num: number) {
			return this.list()[ num ]
		}

		@ $mol_mem_key
		static element_by_name(name: string) {
			return this.index_by_prop( 'name' )[ name ]
		}

		@ $mol_mem_key
		static prop_values( prop: keyof typeof Prop_names.Value ) {
			return this.list().map( el => el[prop] )
		}

	}

}
