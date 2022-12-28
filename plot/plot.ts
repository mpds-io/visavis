namespace $ {

	interface Plot {
		id: string
		type: 'matrix' | string
		json: unknown
	}

	export class $visavis_plot extends $mol_store<Plot> {

		id(next?: string) {
			return this.value('id', next)
		}

		type() {
			return this.value('type')
		}

		json() {
			return this.value('json')
		}

	}

}
