namespace $.$$ {

	$mol_style_define( $.$mpds_visavis_app, {

		contain: 'none', //otherwise in fullscreen 'fixed' positions plot relative to parent not to the viewport

		Plot_view: {
			flex: {
				direction: 'column',
			},
			height: '100%',
			background: {
				color: 'white',
			},
		},

		Start_page: {
			'@': {
				mol_drop_status: {
					drag: {
						background: {
							color: $mol_theme.hover,
						},
					},
				},
			},
			padding: $mol_gap.block,
			paddingTop: '10%',
			flex: {
				grow: 1,
			},
			alignItems: 'center',
			gap: $mol_gap.block,
		},

		Upload_content: {
			alignItems: 'center',
		},

		Upload_label_drop: {
			color: $mol_theme.shade,
		},

		Start_page_upload: {
			background: {
				color: $mol_theme.card,
			},
			margin: $mol_gap.block,
			width: '6rem',
			height: '6rem',
			alignItems: 'center',
			justifyContent: 'center',
			overflow: 'hidden',
			Icon: {
				width: '50%',
				height: '50%',
			},
		},


		Menu: {
			flex: {
				basis: '25rem',
				shrink: 0,
			},
		},

		History_upload: {
			background: {
				color: $mol_theme.card,
			},
			justifyContent: 'space-between',
			position: 'relative',
		},

		History_upload_label: {
			flex: {
				shrink: 1,
			},
		},

		History_drop_area: {
			'@': {
				mol_drop_status: {
					drag: {
						background: {
							color: $mol_theme.hover,
						},
					},
				},
			},
		},

		History_upload_native: {
			top: 0,
			height: '100%',
		},

		Plot_link: {
			flex: {
				grow: 1,
				shrink: 1,
			},
			wordBreak: 'break-word'
		},

		Plot_page: {
			flex: {
				grow: 1,
				basis: '40rem',
			},
			Body: {
				contain: 'none', //otherwise in fullscreen 'fixed' positions plot relative to parent not to the viewport
			},
		},

	} )

}
