namespace $.$$ {

	const { per, rem, px } = $mol_style_unit

	$mol_style_define( $.$visavis_matrix, {

		flex: {
			basis: rem(60),
			shrink: 0,
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

		Root: {
			margin: 'auto',
		},

		Order_switch: {
			flex: {
				shrink: 1,
			},
		},

		Setup: {
			Body: {
				padding: $mol_gap.block,
			},
		},

	} )

}
