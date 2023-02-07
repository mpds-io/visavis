namespace $.$$ {

	const { per, rem, px } = $mol_style_unit
	const { calc } = $mol_style_func

	$mol_style_define( $visavis_cube, {

		Plot: {
			flex: {
				basis: calc( `${ per(100) } - ${ rem(50) }` ),
				shrink: 0,
			},
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

		Root: {
			width: $mol_style_unit.per(100),
			height: $mol_style_unit.per(100),
		},

	} )

}
