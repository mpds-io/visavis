namespace $.$$ {
	/**
	 * Non-former compounds enumeration
	 * based on a manually prepared by PV listing
	 */
	export class $visavis_elements_nonformer {
		
		// 759 non-formers and ordered phases, 02/2023 by PV
		@ $mol_mem
		static pd_bin() { 
			const tree = $$.$mol_tree2_from_string( $mol_fetch.text( '/visavis/elements/data/nonformer_pd_bin.json.tree' ) )
			const json: any = tree.kids.map( tree => $$.$mol_tree2_to_json( tree ) )
			return json
		}

		// 3511 non-formers derived from above
		@ $mol_mem
		static pd_tri_labels(): string[] {
			const tree = $$.$mol_tree2_from_string( $mol_fetch.text( '/visavis/elements/data/nonformer_pd_tri.json.tree' ) )
			const json: any = tree.kids.map( tree => $$.$mol_tree2_to_json( tree ) )
			return json
		}

		@ $mol_mem
		static pd_tri_nums() {
			const x: number[] = []
			const y: number[] = []
			const z: number[] = []

			this.pd_tri_labels().forEach( label => {
				const names = label.split('-')

				const nums = names.map( el_name => $visavis_elements_list.element_by_name( el_name ).num )
				x.push( nums[0] )
				y.push( nums[1] )
				z.push( nums[2] )
			})

			return { x, y, z }
		}

	}

}
