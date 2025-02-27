namespace $ {

	interface Plot_raw {
		id: string
		type: 'matrix' | 'plot3d' | 'pd' | 'bar' | 'discovery' | 'eigenplot' | 'pie' | 'scatter' | 'customscatter' | 'heatmap' | 'graph'
		jsons: any[]
	}

	export function $mpds_visavis_plot_raw_from_jsons( jsons: any[], id?: string ){

		jsons.forEach( json => {
			if ( json && json.error ) return $mol_fail( new $mol_data_error( json.error ) )
			if ( !json || !json.use_visavis_type ) return $mol_fail( new $mol_data_error( 'Error: unknown data format' ) )
		} )

		return new $mpds_visavis_plot_raw({
			id: id || $mol_guid(),
			type: jsons[0].use_visavis_type ?? 'unknown',
			jsons,
		})
	}

	export class $mpds_visavis_plot_raw extends $mol_store<Plot_raw> {

		id(next?: string) {
			return this.value('id', next)
		}

		type() {
			return this.value('type')
		}

		jsons() {
			return this.value('jsons')
		}

	}

}
