namespace $.$$ {

	export class $visavis extends $.$visavis {

		in_iframe() {
			try {
				return window.self !== window.top;
			} catch ( e ) {
				return true;
			}
		}

		@ $mol_mem
		Sub() {
			return this.in_iframe() ? this.Frame() : this.App()
		}

	}

}
