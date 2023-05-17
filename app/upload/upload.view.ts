namespace $.$$ {

	export class $visavis_app_upload extends $.$visavis_app_upload {

		receive(data: DataTransfer) {
			this.files( data.files )
		}

		open_dialog() {
			this.Native().dom_node().click()
		}

	}

}
