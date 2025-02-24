namespace $.$$ {

	export class $mpds_visavis_plot extends $.$mpds_visavis_plot {

		@ $mol_action
		static fetch_plot_json( request: RequestInfo | null ){
			if ( request == null ) return null

			const json = $mol_fetch.json( request, { credentials: 'include' } ) as any

			if ( json && json.error ) return $mol_fail( new $mol_data_error( json.error ) )
			if ( !json || !json.use_visavis_type ) return $mol_fail( new $mol_data_error( 'Error: unknown data format' ) )

			return json
		}

		@ $mol_mem
		requests() {
			if( this.json_cmp_request() ) return [ this.json_request()!, this.json_cmp_request()! ]
			if( this.multi_requests().length > 0 ) return this.multi_requests()
			return [ this.json_request() ]
		}

		@ $mol_mem_key
		json_fetched( request: string ) {
			return $mpds_visavis_plot.fetch_plot_json( request )
		}

		@ $mol_mem
		jsons_fetched() {
			const requests = this.requests()
			return requests.map( req => this.json_fetched( req ) )
		}

		jsons_cached?: any[] | null
		@ $mol_mem
		jsons() {
			try {
				const jsons = this.jsons_fetched()
				this.jsons_cached = jsons
				return jsons

			} catch( error ) {
				if( !this.$.$mol_promise_like( error ) && this.jsons_cached ) {
					console.error( error )
					return this.jsons_cached
				}
				throw error
			}
		}

		error_visible() {
			return this.error_message() ? super.error_visible() : []
		}

		error_message(): string {
			try {
				this.jsons_fetched()
				return ''

			} catch( error: any ) {
				if( this.$.$mol_promise_like( error ) ) throw error
				return error.message || String( error )
			}
		}

		@ $mol_mem
		json_cmp_request( next?: string | null ) {
			if ( next === null && $mol_wire_probe( ()=> this.json_cmp_request() ) === null ) {
				this.notify( 'Comparison was reset' )
			}
			return next ?? null
		}

		@ $mol_mem
		inconsistent_projection() {
			const fixels = new Set
			this.jsons().forEach( json => fixels.add( json.payload?.fixel ) )
			return fixels.size > 1
		}

		@ $mol_mem
		plot_raw() {
			if( this.inconsistent_projection() ) {
				this.notify( 'Error: inconsistent datasets projection' )
			}

			return $mpds_visavis_plot_raw_from_jsons( this.jsons() )
		}

		@ $mol_mem
		plot_type(): ReturnType< $mpds_visavis_plot_raw['type'] > {
			return this.plot_raw()?.type()!
		}

		@ $mol_mem
		demo_warn_visible() {
			if( !this.show_demo_warn() ) return []

			if( this.plot_type() == 'matrix' ) return []
			if( this.plot_type() == 'discovery' ) return []
			if( this.plot_type() == 'pd' && !this.phase_data_demo() ) return []

			return [ this.Demo_warn() ]
		}

		@ $mol_mem
		Plot() {
			return this.plot_type() ? this.plots()[ this.plot_type()! ] : super.Plot()
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
		on_fixel_checked( checked: boolean ) { 
			let requests = this.multi_requests()

			if( requests.length == 0 ){
				const url = this.json_request()
				this.json_request( checked ? this.url_fixel( url ) : this.url_unfixel( url ) )
				return
			}

			this.multi_requests( requests.map( url => checked ? this.url_fixel( url ) : this.url_unfixel( url ) ) )
		}

		@ $mol_action
		url_unfixel( url: string ) { 
			return url.replace('&fixel=1', '')
		}

		@ $mol_action
		url_fixel( url: string ) { 
			return url + '&fixel=1'
		}

		@ $mol_action
		notify( msg: string ) {
			alert( msg )
		}

		@ $mol_action
		reset() {
			const sub = [ ...this.sub() ]
			this.sub( [] )

			setTimeout( ()=> this.sub( sub ), 0 )
		}

	}

	$mol_view_component( $mpds_visavis_plot )

}
