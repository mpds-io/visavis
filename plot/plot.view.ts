namespace $.$$ {

	export class $mpds_visavis_plot extends $.$mpds_visavis_plot {

		@ $mol_action
		fetch_plot_json( request: RequestInfo ){
			if ( request == null ) return null

			const json = $mol_fetch.json( request ) as any

			if ( json && json.error ) return $mol_fail( new $mol_data_error( json.error ) )
			if ( !json || !json.use_visavis_type ) return $mol_fail( new $mol_data_error( 'Error: unknown data format' ) )	

			return json
		}

		@ $mol_mem
		json() {
			return this.fetch_plot_json( this.json_request() )
		}

		@ $mol_mem
		json_cmp() {
			return this.fetch_plot_json( this.json_cmp_request() )
		}

		@ $mol_mem
		plot_raw() {
			return this.json() ? 
				$mpds_visavis_plot_raw_from_json( this.json() ) : null
		}

		@ $mol_mem
		sub() {
			return this.plot_raw() ?
				[ this.Fullscreen(), this.plots()[ this.plot_raw()!.type() ] ] : []
		}

		@ $mol_mem
		matrix_fixel_checked( next?: any ): boolean {
			if ( next !== undefined ) {
				this.on_fixel_checked( next )
				return next
			}
			return true
		}

		@ $mol_mem
		cube_fixel_checked( next?: any ): boolean {
			if ( next !== undefined ) {
				this.on_fixel_checked( next )
				return next
			}
			return false
		}

		@ $mol_action
		on_fixel_checked( checked: boolean ) { }

		@ $mol_mem
		static register(){
			$mol_view_component( $mpds_visavis_plot )
		}

	}

	$mpds_visavis_plot.register()

}
