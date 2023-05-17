namespace $ {

	interface Plot {
		id: string
		type: 'matrix' | 'plot3d' | 'pd' | string
		json: unknown
	}

	export function $visavis_plot_from_json( json: any, id?: string ){
		return new $visavis_plot({
			id: id || $mol_guid(),
			type: json.use_visavis_type ?? 'unknown',
			json,
		})
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
