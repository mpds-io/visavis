namespace $.$$ {

	$mol_style_define( $.$mpds_visavis_plot_matrix, {

		flex: {
			grow: 1,
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
			margin: '1px',
		},

		Heatmap_legend: {
			alignItems: 'flex-end',
			flex: {
				direction: 'column-reverse',
			},
		},

		Root: {
			margin: 'auto',
			position: 'absolute',
			left: '50%',
			transform: 'translateX(-50%)'
		},

		Order_switch: {
			flex: {
				shrink: 1,
			},
		},

		Plot: {
			flex: {
				grow: 1,
			},
			position: 'relative',
		},
		Setup: {
			flex: {
				direction: 'column',
				basis: '10rem',
			},
			font: {
				size: '.75rem',
			},
			justifyContent: 'center',
		},

	} )

}
