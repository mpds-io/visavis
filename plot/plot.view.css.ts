namespace $.$$ {

	$mol_style_define( $mpds_visavis_plot, {

		Fullscreen: {
			position: 'absolute',
			right: 0,
			Icon: {
				width: '1.5rem',
				height: '1.5rem',
			},
			zIndex: 5,
		},
		
		Demo_warn: {
			position: 'absolute',
			left: 0,
			right: 0,
			justify: {
				content: 'center'
			},
			font: {
				size: '.75rem',
			},
			zIndex: 1,
			cursor: 'default',
		},

		Error: {
			position: 'absolute',
			width: '50%',
			height: '50%',
			left: '25%',
			top: '25%',

			justify: {
				content: 'center'
			},
			align: {
				items: 'center',
			},

			background: {
				color: $mol_theme.back,
			},
			border: {
				radius: $mol_gap.round,
			},

			zIndex: 1,
			cursor: 'default',
		},

	} )

}
