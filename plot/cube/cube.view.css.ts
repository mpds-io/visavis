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
				direction: 'column',
				basis: '10rem',
			},
			font: {
				size: '.75rem',
			},
			justifyContent: 'center',
		},

		flex: {
			grow: 1
		},

		X_order: {
			zIndex: 3,
		},
		Y_order: {
			zIndex: 2,
		},
		Z_order: {
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
