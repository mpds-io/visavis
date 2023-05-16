namespace $.$$ {

	const { rem, per } = $mol_style_unit
	const { calc } = $mol_style_func

	$mol_style_define( $.$visavis_app, {

		Menu: {
			flex: {
				basis: rem(25),
				shrink: 0,
			},
			Body: {
				padding: $mol_gap.block,
			},
			Foot: {
				padding: $mol_gap.block,
			},
		},

		Plot_link: {
			flex: {
				grow: 1,
			},
		},

	} )

}
