namespace $.$$ {

	const { per, rem, px } = $mol_style_unit

	$mol_style_define( $visavis_discovery, {

		Plot: {
			flex: {
				grow: 1,
			},
		},

		Root: {
			width: '100%',
			height: '100%',
		},

		Setup: {
			flex: {
				basis: rem(25),
				shrink: 0,
			},
			Body: {
				padding: $mol_gap.block,
			},
		},
		
	} )

}
