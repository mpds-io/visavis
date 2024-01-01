namespace $.$$ {
	export class $mpds_visavis_plot_legend_cmp extends $.$mpds_visavis_plot_legend_cmp {

		sub(): readonly any[] {
			return this.labels().length == 2
				? super.sub()
				: this.labels().map( ( label, ind ) => this.Label( ind ) )
		}
		
		label( index: number ): string {
			return this.labels()[ index ] ?? ''
		}

		background( index: number ): string {
			return this.colorset()[ index ] ?? ''
		}
		
	}
}
