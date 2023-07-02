namespace $ {

	export class $mpds_visavis_lib extends $mol_object2 {

		@ $mol_mem
		static plotly() {
			return require('../mpds/visavis/lib/plotly.custom.min.js')
		}
		
		@ $mol_mem
		static pca() {
			return require('../mpds/visavis/lib/pca.js')
		}

		@ $mol_mem
		static d3() {
			$mol_wire_solid() //otherwise it becomes undefined
			return this.plotly().d3
		}

	}
}
