namespace $.$$ {

	export class $visavis_frame extends $.$visavis_frame {

		@ $mol_mem
		plot_raw() {
			const href = this.$.$mol_state_arg.href()
			const hash = href.split('#')[1]
			const json = $mol_fetch.json( hash )
			return json ? $visavis_plot_raw_from_json( json ) : null
		}

	}

}
