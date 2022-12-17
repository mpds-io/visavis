namespace $.$$ {

	export class $mpds_visavis extends $.$mpds_visavis {

		async load_file( blob: Blob ) {
			return new Promise< string >( ( done, fail )=> {
				const reader = new FileReader
				reader.onerror = fail
				reader.onload = event => done( event.target!.result as string )
				reader.readAsText( blob )
			} )
		}

		@ $mol_action
		files_open(next: readonly File[]) {
			if (next.length === 0) return null

			const json = $mol_wire_sync( this as $mpds_visavis ).load_file( next[0] )
			const file = { title: next[0].name, data: JSON.parse( json ) }
			this.history( [...this.history(), file] )
		}

		@ $mol_mem
		history(next?: { title: string, data: any }[]) {
			return this.$.$mol_state_local.value( `${this}.history()`, next ) ?? []
		}

		file_title(id: number) {
			return this.history()[id].title
		}

		history_rows() {
			return this.history().map( (_, index)=> this.File(index) ).reverse()
		}

		file_current_title() {
			return this.$.$mol_state_arg.value( 'file' ) ?? ''
		}

		file_current() {
			const found = this.history().find( obj => obj.title === this.file_current_title() )
			return found?.data
		}

		pages() {
			return [
				this.Menu(),
				... this.file_current()?.use_visavis_type === 'matrix' ? [ this.Matrix( this.file_current_title() ) ] : [],
			]
		}

	}

}
