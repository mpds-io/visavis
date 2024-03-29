namespace $.$$ {
	export class $mpds_visavis_plot_legend_cmp extends $.$mpds_visavis_plot_legend_cmp {

		sub(): readonly any[] {
			const labels = this.labels()
			return [ 
				...labels.map( ( label, ind ) => this.Label( ind ) ),
				...labels.length > 1 ? [ this.Intersection() ] : []
			]
		}
		
		label( index: number ): string {
			return this.labels()[ index ] ?? ''
		}

		background( index: number ): string {
			return this.colorset()[ index ] ?? ''
		}
		
	}
}
