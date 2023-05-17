namespace $.$$ {

	export class $visavis_plot_plotly extends $.$visavis_plot_plotly {

		plot_title() {
			return this.plot().id()
		}

		json() {
			return this.plot().json() as any
		}

		@ $mol_action
		subscribe_events() {

		}

		@ $mol_mem
		layout() {
			return {
				font: {family: "Exo2", size: 13}
			}
		}

		@ $mol_mem
		data() {
			const json = this.json()

			return json
		}

		@ $mol_mem
		draw() {
			if (!this.Root().view_rect()) return
			const { width, height } = this.Root().view_rect()!
			
			const plotly_root = document.createElement('div')
			plotly_root.style.position = 'absolute' //otherwise plotly_root prevents dom_node from resizing
			
			const promise = $lib_plotly.all().react(
				plotly_root,
				this.data(), 
				{ ...this.layout(), width, height },
				this.plot_options(),
			)
				
			const dom_node = this.Root().dom_node_actual() as HTMLElement
			promise.then( ( plotly_root: HTMLElement )=> {
				dom_node.replaceChildren( plotly_root )
				this.subscribe_events() 
			})
		}

	}
	
}
