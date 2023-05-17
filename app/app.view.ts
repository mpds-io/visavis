namespace $.$$ {

	export class $visavis_app extends $.$visavis_app {

		@ $mol_action
		files_read(next: readonly File[]) {
			const data = $mol_wire_sync( $mol_blob_json )( next[0] )

			const plot_raw = $visavis_plot_raw_from_json( data, next[0].name )

			this.history_add( plot_raw )
		}

		@ $mol_action
		history_add(plot_raw: $visavis_plot_raw) {
			const duplicates = this.history_plot_ids().filter( id => id.replace(/\[\d+?\]/, '') === plot_raw.id() )
			const count = Math.max( ... duplicates.map( id => Number( id.match(/\[(\d+?)\]$/)?.[1] ?? 0 ) ) )
			const postfix = duplicates.length ? `[${ count + 1 }]` : ''

			plot_raw.id( `${ plot_raw.id() }${ postfix }` )

			this.history_plot_raw( plot_raw.id(), plot_raw )
			this.history_plot_ids( [ plot_raw.id(), ...this.history_plot_ids() ] )
		}

		@ $mol_action
		history_drop(id: string) {
			this.history_plot_raw(id, null)
			this.history_plot_ids( this.history_plot_ids().filter( plot_id => plot_id !== id ) )
		}

		@ $mol_mem_key
		history_plot_ids(next?: string[]) {
			return this.$.$mol_state_local.value( `${this}.history_plots()` , next ) ?? []
		}

		@ $mol_mem_key
		history_plot_raw(id: string, next?: $visavis_plot_raw | null) {
			const json = this.$.$mol_state_local.value( `${this}.history_plot('${id}')` , next && next.data() )
			return json ? new $visavis_plot_raw( json ) : null
		}

		@ $mol_mem
		history_rows() {
			return this.history_plot_ids().map( (id)=> this.History_plot(id) )
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
			return [
				this.Menu(),
				... this.Plot_opened(),
			]
		}

		Placeholder() {
			return this.Plot_opened().length > 0 ? null as any : super.Placeholder()
		}

	}

}
