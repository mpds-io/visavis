namespace $.$$ {

	export class $visavis_upload extends $.$visavis_upload {

		receive(data: DataTransfer) {
			this.files( data.files )
		}

		open_dialog() {
			this.Native().dom_node().click()
		}

	}

}
