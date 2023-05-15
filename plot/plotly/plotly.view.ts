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
			const promise = $lib_plotly.all().react(
				this.Root().dom_node() as HTMLElement,
				this.data(), 
				this.layout(),
				this.plot_options(),
			)

			promise.then( () => this.subscribe_events() )
		}

	}
	
}
