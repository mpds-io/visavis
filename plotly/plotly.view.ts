namespace $.$$ {

	export class $mpds_visavis_plotly extends $.$mpds_visavis_plotly {

		@ $mol_mem
		size() {
			if ( !this.view_rect() ) return
			const { width, height } = this.view_rect()!
			return { width, height }
		}

		@ $mol_mem
		Plotly_root() {
			if ( !this.size() ) return
			const { width, height } = this.size()!
			
			const plotly_root = $mol_wire_sync( document ).createElement( 'div' ) as HTMLElement
			const plotly_root_actual = $mol_wire_sync( $mpds_visavis_lib_plotly ).react(
				plotly_root,
				this.data(),
				{ ...this.layout(), width, height },
				this.plot_options(),
			)

			return plotly_root_actual
		}

	}
	
}
