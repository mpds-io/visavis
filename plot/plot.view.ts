namespace $.$$ {

	export class $mpds_visavis_plot extends $.$mpds_visavis_plot {

		@ $mol_action
		static fetch_plot_json( request: RequestInfo | null ){
			if ( request == null ) return null

			const json = $mol_fetch.json( request ) as any

			if ( json && json.error ) return $mol_fail( new $mol_data_error( json.error ) )
			if ( !json || !json.use_visavis_type ) return $mol_fail( new $mol_data_error( 'Error: unknown data format' ) )	

			return json
		}

		@ $mol_mem
		json() {
			return $mpds_visavis_plot.fetch_plot_json( this.json_request() )
		}

		@ $mol_mem
		json_cmp() {
			return $mpds_visavis_plot.fetch_plot_json( this.json_cmp_request() )
		}

		@ $mol_mem
		multi_jsons() {
			return this.multi_requests().length > 0 
				? this.multi_requests().map( req => $mpds_visavis_plot.fetch_plot_json( req ) )
				: this.json_cmp() ? [ this.json(), this.json_cmp() ] : null
		}

		@ $mol_mem
		json_cmp_request( next?: string | null ) {
			if ( next === null && $mol_wire_probe( ()=> this.json_cmp_request() ) === null ) {
				this.notify( 'Comparison was reset' )
			}
			return next ?? null
		}

		@ $mol_mem
		plot_raw() {
			return this.multi_jsons()
				? $mpds_visavis_plot_raw_from_json( this.multi_jsons()![0] ) 
				: this.json()
					? $mpds_visavis_plot_raw_from_json( this.json() ) 
					: null
		}

		@ $mol_mem
		sub() {
			const phase_data_demo = this.plot_raw()?.type()! == 'pd' ? this.phase_data_demo() : false
			const show_demo_warn = this.show_demo_warn() 
				&& ! [ 'matrix', 'discovery' ].includes( this.plot_raw()?.type()! ) 
				&& ! phase_data_demo

			return this.plot_raw() ? [
				... show_demo_warn ? [ this.Demo_warn() ] : [],
				this.Fullscreen(), 
				this.plots()[ this.plot_raw()!.type() ] 
			] : []
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

		@ $mol_action
		notify( msg: string ) {
			alert( msg )
		}

	}

	$mol_view_component( $mpds_visavis_plot )

}
