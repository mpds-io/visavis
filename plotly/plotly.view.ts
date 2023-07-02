namespace $.$$ {

	export class $mpds_visavis_plotly extends $.$mpds_visavis_plotly {

		@ $mol_action
		subscribe_events() {

		}

		@ $mol_mem
		render() {
			if (!this.view_rect()) return
			const { width, height } = this.view_rect()!
			
			const plotly_root = $mol_wire_sync( document ).createElement( 'div' ) as HTMLElement
			plotly_root.style.position = 'absolute' //otherwise plotly_root prevents dom_node from resizing
			
			const promise = $mpds_visavis_lib.plotly().react(
				plotly_root,
				this.data(), 
				{ ...this.layout(), width, height, font: { family: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" } },
				this.plot_options(),
			)
			
			const dom_node = this.dom_node_actual() as HTMLElement
			promise.then( ( plotly_root: HTMLElement )=> {
				dom_node.replaceChildren( plotly_root )
				this.subscribe_events() 
			})
			
		}

	}
	
}
