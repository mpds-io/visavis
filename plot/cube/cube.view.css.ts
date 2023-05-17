namespace $.$$ {

	$mol_style_define( $visavis_plot_cube, {

		Plot: {
			flex: {
				grow: 1,
			},
			position: 'relative',
		},
		Setup: {
			flex: {
				basis: '25rem',
				direction: 'column',
				shrink: 0,
			},
			padding: $mol_gap.block,
		},
		

		flex: {
			grow: 1
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
			top: '50%',
			right: $mol_gap.space,
			transform: 'translateY(-50%)'
		},

		Heatmap_color: {
			width: '1rem',
			height: '1rem',
			margin: '1px'
		},

		Heatmap_legend: {
			alignItems: 'flex-end',
			flex: {
				direction: 'column-reverse',
			},
		},

	} )

}
