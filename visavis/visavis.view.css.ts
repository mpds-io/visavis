namespace $.$$ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $.$mpds_visavis, {

		Menu: {
			flex: {
				basis: rem(25),
				shrink: 0,
			},
		},

		Upload: {
			margin: $mol_gap.block,
			padding: $mol_gap.block,
			gap: $mol_gap.block,
			cursor: 'pointer',
			border: {
				style: 'dashed',
				width: px(1),
				color: $mol_theme.line,
				radius: $mol_gap.round,
			},
			':hover': {
				background: {
					color: $mol_theme.hover,
				},
			},
		},

		Matrix: {
			flex: {
				basis: rem(60),
				shrink: 0,
			},
		},

	} )

}
