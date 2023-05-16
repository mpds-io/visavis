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
			try {

				$mol_wire_sync( $lib_plotly.all() ).react(
					this.Root().dom_node() as HTMLElement,
					this.data(), 
					this.layout(),
					this.plot_options(),
				)	

				this.subscribe_events() 
				this.error_showed( null )

			} catch( error: any ) {

				$mol_fail_log( error )
				this.error_showed( error )

			}
		}

	}
	
}
