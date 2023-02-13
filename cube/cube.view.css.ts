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

		X_order_label: {
			zIndex: 3,
		},

		Y_order_label: {
			zIndex: 2,
		},

		Z_order_label: {
			zIndex: 1,
		},

		Side_right: {
			position: 'absolute',
			top: per(50),
			right: $mol_gap.space,
			transform: 'translateY(-50%)'
		},

		Heatmap_color: {
			width: rem(1),
			height: rem(1),
			margin: px(1),
		},

		Heatmap_legend: {
			alignItems: 'flex-end',
			flex: {
				direction: 'column-reverse',
			},
		},

	} )

}
