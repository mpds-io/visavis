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

		X_label: {
			font: {
				size: '0.875rem',
				style: 'italic',
			},
			position: 'absolute',
			left: 0,
			top: 0,
			width: '100%',
			padding: {
				bottom: $mol_gap.space,
			},

			gap: $mol_gap.block,
			align: {
				items: 'center',
			},
			justify: {
				content: 'center',
			}
		},

		Y_label: {
			font: {
				size: '0.875rem',
				style: 'italic',
			},
			position: 'absolute',
			transform: 'rotate(-90deg) translateY(-50%)',
			left: 0,
			top: '50%',
			padding: {
				bottom: $mol_gap.space,
			},
			gap: $mol_gap.block,
		},

		Order_switch: {
			flex: {
				shrink: 1,
			},
			Option: {
				padding: ['.25rem', '.75rem'],
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
