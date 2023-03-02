namespace $.$$ {

	const { px } = $mol_style_unit

	$mol_style_define( $.$visavis_upload, {
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
		Drop_area: {
			position: 'absolute',
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		}
	} )

}
