namespace $.$$ {

	export class $visavis_plotly extends $.$visavis_plotly {

		@ $mol_action
		subscribe_events() {

		}

		@ $mol_mem
		render() {
			if (!this.view_rect()) return
			const { width, height } = this.view_rect()!
			
			const plotly_root = document.createElement('div')
			plotly_root.style.position = 'absolute' //otherwise plotly_root prevents dom_node from resizing
			
			const promise = $lib_plotly.all().react(
				plotly_root,
				this.data(), 
				{ ...this.layout(), width, height },
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
