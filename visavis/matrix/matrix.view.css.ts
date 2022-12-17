namespace $.$$ {

	const { per, rem } = $mol_style_unit

	$mol_style_define( $.$mpds_visavis_matrix, {

		flex: {
			basis: rem(60),
			shrink: 0,
		},

		Heatmap_legend: {
			flex: {
				direction: 'row',
			},
			alignItems: 'center',
			gap: $mol_gap.block,
			padding: $mol_gap.text,
		},

		Heatmap_color: {
			width: rem(1),
			height: rem(1),
		},

		Plot: {
			margin: 'auto',
		},

	} )

}
