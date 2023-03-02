namespace $.$$ {

	const { per, rem, px } = $mol_style_unit
	const { calc } = $mol_style_func

	$mol_style_define( $visavis_phase, {

		Plot: {
			flex: {
				basis: calc( `${ per(100) } - ${ rem(50) }` ),
				shrink: 0,
			},
		},

		Root: {
			width: $mol_style_unit.per(100),
			height: $mol_style_unit.per(100),
		},

	} )

}
