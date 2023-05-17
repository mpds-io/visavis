namespace $.$$ {

	export class $visavis_app extends $.$visavis_app {

		@ $mol_action
		files_read(next: readonly File[]) {
			const data = $mol_wire_sync( $mol_blob_json )( next[0] )

			const plot = $visavis_plot_from_json( data, next[0].name )

			this.history_add( plot )
		}

		@ $mol_action
		history_add(plot: $visavis_plot) {
			const duplicates = this.history_plots().filter( id => id.replace(/\[\d+?\]/, '') === plot.id() )
			const count = Math.max( ... duplicates.map( id => Number( id.match(/\[(\d+?)\]$/)?.[1] ?? 0 ) ) )
			const postfix = duplicates.length ? `[${ count + 1 }]` : ''

			plot.id( `${ plot.id() }${ postfix }` )

			this.history_plot(plot.id(), plot )
			this.history_plots( [ ...this.history_plots(), plot.id() ] )
		}

		@ $mol_action
		history_drop(id: string) {
			this.history_plot(id, null)
			this.history_plots( this.history_plots().filter( plot_id => plot_id !== id ) )
		}

		@ $mol_mem_key
		history_plots(next?: string[]) {
			return this.$.$mol_state_local.value( `${this}.history_plots()` , next ) ?? []
		}

		@ $mol_mem_key
		history_plot(id: string, next?: $visavis_plot | null) {
			const json = this.$.$mol_state_local.value( `${this}.history_plot('${id}')` , next && next.data() )
			return json ? new $visavis_plot( json ) : null
		}

		@ $mol_mem
		history_rows() {
			return this.history_plots().map( (id)=> this.Plot(id) ).reverse()
		}

		plot_id(id: string) {
			return id 
		}

		plot_opened(next?: string | null) {
			return this.$.$mol_state_arg.value( 'file' , next ) ?? ''
		}

		Plot_opened() {
			const id = this.plot_opened()
			if (!id) return []

			const plot = this.history_plot( id )
			if (!plot) return []

			switch( plot.type() ) {
				case 'matrix': return this.Matrix( plot ).pages()
				case 'plot3d': return this.Cube( plot ).pages()
				case 'pd': return this.Phase( plot ).pages()
				case 'bar': return this.Bar( plot ).pages()
				case 'discovery': return this.Discovery( plot ).pages()
				case 'eigenplot': return this.Eigen( plot ).pages()
				case 'pie': return this.Pie( plot ).pages()
				case 'scatter': return this.Scatter( plot ).pages()
				case 'customscatter': return this.Customscatter( plot ).pages()
				case 'heatmap': return this.Heatmap( plot ).pages()
				case 'graph': return this.Graph( plot ).pages()
				default: return []
			}
		}

		plot(plot: $visavis_plot) {
			return plot
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
