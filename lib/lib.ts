namespace $ {

	export class $visavis_lib extends $mol_object2 {

		@ $mol_mem
		static plotly() {
			return $mol_import.script('/visavis/lib/bundle/plotly.custom.min.js').Plotly as any
		}

		static d3() {
			return this.plotly().d3
		}

	}
}
