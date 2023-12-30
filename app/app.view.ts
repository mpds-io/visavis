namespace $.$$ {

	export class $mpds_visavis_app extends $.$mpds_visavis_app {

		@ $mol_action
		files_read(next: readonly File[]) {
			for (const file of next) {

				const data = $mol_wire_sync( $mol_blob_json )( file )

				const plot_raw = $mol_wire_sync( $mpds_visavis_plot_raw_from_json )( data, file.name )
				
				this.plot_opened_id( this.history_add( plot_raw ) )
			}
		}

		@ $mol_action
		drop_file(transfer: any) {
			this.files_read( transfer.files )
		}

		@ $mol_action
		history_add(plot_raw: $mpds_visavis_plot_raw) {
			const duplicates = this.history_plot_ids().filter( id => id.replace(/\[\d+?\]/, '') === plot_raw.id() )
			const count = Math.max( ... duplicates.map( id => Number( id.match(/\[(\d+?)\]$/)?.[1] ?? 0 ) ) )
			const postfix = duplicates.length ? `[${ count + 1 }]` : ''

			plot_raw.id( `${ plot_raw.id() }${ postfix }` )

			this.plot_raw( plot_raw.id(), plot_raw )
			this.history_plot_ids( [ plot_raw.id(), ...this.history_plot_ids() ] )

			return plot_raw.id()
		}

		@ $mol_action
		history_drop(id: string) {
			this.plot_opened_id( null )
			this.plot_raw( id, null )
			this.history_plot_ids( this.history_plot_ids().filter( plot_id => plot_id !== id ) )
		}

		@ $mol_mem
		history_plot_ids(next?: string[]) {
			return this.$.$mol_state_local.value( `${this}.history_plot_ids()` , next ) ?? []
		}

		@ $mol_mem_key
		plot_raw(id: string, next?: $mpds_visavis_plot_raw | null) {
			if ( this.json_request_hash() ) {
				const json = $mpds_visavis_plot.fetch_plot_json( this.json_request_hash() )
				return $mpds_visavis_plot_raw_from_json( json, this.json_request_hash()! )
			}

			if ( this.menu_section() == 'examples' ) {
				return this.plot_raw_example(id)
			}

			const data = this.$.$mol_state_local.value( `${this}.plot_raw('${id}')` , next && next.data() )
			return data ? new $mpds_visavis_plot_raw( data ) : null
		}

		@ $mol_mem_key
		plot_raw_example(id: string) {
			const data: $mpds_visavis_plot_raw['data_default'] | null = this.$.$mol_state_local.value( `${this}.plot_raw_example('${id}')` )
			if ( data ) return new $mpds_visavis_plot_raw( data )

			const json = $mol_fetch.json( this.examples()[ id ] )
			const plot_raw = $mpds_visavis_plot_raw_from_json( json, id )
			this.$.$mol_state_local.value( `${this}.plot_raw_example('${id}')`, plot_raw.data() )
			return plot_raw
		}

		@ $mol_mem
		history_rows() {
			return this.history_plot_ids().map( (id)=> this.History_plot_link(id) )
		}

		@ $mol_mem
		example_rows() {
			return Object.keys( this.examples() ).map( name => {
				return this.Plot_link( name )
			} )
		}

		plot_id(id: string) {
			return id
		}

		@ $mol_mem
		plot_opened_id(next?: string | null) {
			return this.$.$mol_state_arg.value( 'file' , next ) ?? this.json_request_hash() ?? ''
		}

		@ $mol_mem
		Plot_opened() {
			const id = this.plot_opened_id()
			return id ? this.Plot_page( id ) : null
		}

		@ $mol_mem
		Start_page_showed() {
			return !this.$.$mol_state_arg.value('section') && this.history_plot_ids().length == 0
		}

		@ $mol_mem
		pages() {
			return this.json_request_hash() 
				? [ this.Plot_opened() ]
				: [
					...[ this.Start_page_showed() ?
						this.Start_page() :
						this.Menu()
					],
					this.Plot_opened(),
				]
		}

		@ $mol_mem
		menu_body() {
			if (this.menu_section() == 'examples') {
				return [ this.Examples() ]
			} else {
				return [ this.History() ]
			}
		}

		@ $mol_mem
		menu_section() {
			return this.$.$mol_state_arg.value('section')
		}

		@ $mol_mem
		json_request_hash() {
			const hash = this.$.$mol_state_arg.href().split( '#' )[1]
			if ( hash?.slice(0, 4) == 'http' ) return hash
			return null
		}

	}

	$mol_view_component( $mpds_visavis_app )

}
