namespace $.$$ {

	const Cmp_label: $mol_style_properties = {
		color: 'white',
		padding: {
			left: $mol_gap.space,
			right: $mol_gap.space,
		}
	}

	$mol_style_define( $visavis_plot_legend_cmp, {

		position: 'absolute',
		left: 0,
		bottom: 0,
		width: '100%',
		gap: $mol_gap.block,
		alignItems: 'center',
		justifyContent: 'center',
		padding: {
			bottom: $mol_gap.space,
		},
		lineHeight: '1',

		First_cmp_label: {
			...Cmp_label,
			background: {
				color: '#3e3f95',
			},
		},

		Second_cmp_label: {
			...Cmp_label,
			background: {
				color: '#c00',
			},
		},

	} )

}
