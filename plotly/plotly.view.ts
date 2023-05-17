namespace $.$$ {

	export class $visavis_plotly extends $.$visavis_plotly {

		@ $mol_action
		subscribe_events() {

		}

		@ $mol_mem
		sub(): HTMLElement[] {
			if (!this.view_rect()) return []
			
			const { width, height } = this.view_rect()!
			const plotly_root = document.createElement('div')
			plotly_root.style.position = 'absolute' //otherwise plotly_root prevents dom_node from resizing
			
			$mol_wire_async( $lib_plotly.all() ).react(
				plotly_root,
				this.data(), 
				{ ...this.layout(), width, height },
				this.plot_options(),
			)

			return [ plotly_root ]
		}

	}
	
}
