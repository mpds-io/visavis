namespace $.$$ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $.$visavis_app, {

		Menu: {
			flex: {
				basis: rem(25),
				shrink: 0,
			},
			Body: {
				padding: $mol_gap.block,
			},
		},

		Plot_link: {
			flex: {
				grow: 1,
			},
		},

		Matrix: {
			Plot: {
				flex: {
					basis: rem(60),
					shrink: 0,
				},
			},
			Setup: {
				flex: {
					basis: rem(25),
					shrink: 0,
				}
			}
		},

	} )

}
