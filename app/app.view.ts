namespace $.$$ {

	export class $visavis_app extends $.$visavis_app {

		@ $mol_action
		files_read(next: readonly File[]) {
			const data = $mol_wire_sync( $mol_blob_json )( next[0] )

			const plot_raw = $visavis_plot_raw_from_json( data, next[0].name )

			this.plot_opened_id( this.history_add( plot_raw ) )
		}

		@ $mol_action
		drop_file(transfer: any) {
			this.files_read( transfer.files )
		}

		@ $mol_action
		history_add(plot_raw: $visavis_plot_raw) {
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

		@ $mol_mem_key
		history_plot_ids(next?: string[]) {
			return this.$.$mol_state_local.value( `${this}.history_plot_ids()` , next ) ?? []
		}

		@ $mol_mem_key
		plot_raw(id: string, next?: $visavis_plot_raw | null) {
			const json = this.$.$mol_state_local.value( `${this}.plot_raw('${id}')` , next && next.data() )
			return json ? new $visavis_plot_raw( json ) : null
		}

		@ $mol_mem
		history_rows() {
			return this.history_plot_ids().map( (id)=> this.History_plot_link(id) )
		}

		@ $mol_mem
		example_rows() {
			const names = [ 'bar_sci_literature.json' ]

			return names.map( name => {
				const json = $mol_fetch.json( '/visavis/examples/' + name )
				const plot_raw = $visavis_plot_raw_from_json( json, name )

				this.plot_raw( plot_raw.id(), plot_raw )
				
				return this.Plot_link( plot_raw.id() )
			} )
		}

		plot_id(id: string) {
			return id
		}

		plot_opened_id(next?: string | null) {
			return this.$.$mol_state_arg.value( 'file' , next ) ?? ''
		}

		Plot_opened() {
			const id = this.plot_opened_id()
			if (!id) return []
			return [ this.Plot_page( id ) ]
		}

		pages() {
			if( !this.$.$mol_state_arg.value('section') && this.history_plot_ids().length == 0 ) {
				return [ this.Drop_area() ]
			}
			return [
				this.Menu(),
				... this.Plot_opened(),
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

	}

}
