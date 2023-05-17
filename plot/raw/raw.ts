namespace $ {

	interface Plot_raw {
		id: string
		type: 'matrix' | 'plot3d' | 'pd' | 'bar' | 'discovery' | 'eigenplot' | 'pie' | 'scatter' | 'customscatter' | 'heatmap' | 'graph'
		json: unknown
	}

	export function $visavis_plot_raw_from_json( json: any, id?: string ){
		return new $visavis_plot_raw({
			id: id || $mol_guid(),
			type: json.use_visavis_type ?? 'unknown',
			json,
		})
	}

	export class $visavis_plot_raw extends $mol_store<Plot_raw> {

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
