namespace $.$$ {
	/**
	 * Non-former compounds enumeration
	 * based on a manually prepared by PV listing
	 */
	export class $mpds_visavis_elements_nonformer extends $.$mpds_visavis_elements_nonformer {

		@ $mol_mem
		static data() {
			return new $mpds_visavis_elements_nonformer()
		}
		
		// 759 non-formers and ordered phases, 02/2023 by PV
		@ $mol_mem
		static pd_bin() { 
			return this.data().pd_bin()
		}

		// 3511 non-formers derived from above
		@ $mol_mem
		static pd_tri_labels() {
			return this.data().pd_tri()
		}

		@ $mol_mem
		static pd_tri_nums() {
			const x: number[] = []
			const y: number[] = []
			const z: number[] = []

			this.pd_tri_labels().forEach( label => {
				const names = label.split('-')

				const nums = names.map( el_name => $mpds_visavis_elements_list.element_by_name( el_name ).num )
				x.push( nums[0] )
				y.push( nums[1] )
				z.push( nums[2] )
			})

			return { x, y, z }
		}

	}

}
