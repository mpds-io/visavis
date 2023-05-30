namespace $.$$ {

	export class $visavis_frame extends $.$visavis_frame {

		@ $mol_mem
		plot_raw() {
			const href = this.$.$mol_state_arg.href()
			const hash = href.split('#')[1]

			const json: any = hash? $mol_fetch.json( hash ) : default_example
			if (json.error) return $mol_fail( new $mol_data_error( json.error ) )
			
			return json ? $visavis_plot_raw_from_json( json ) : null
		}

	}

	const default_example = {
		"error": null,
		"payload": {
			"x": [
				1983,
				1988,
				2001,
				2002,
				2003,
				2004,
				2007,
				2020
			],
			"dx": 4,
			"y": [
				1,
				1,
				8,
				2,
				2,
				1,
				2,
				21
			],
			"xtitle": "Publication year",
			"ytitle": "Number of entries"
		},
		"use_visavis_type": "bar"
	}

}
