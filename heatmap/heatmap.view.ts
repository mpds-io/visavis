namespace $.$$ {

	// export const $visavis_heatmap_json = 

	export class $visavis_heatmap extends $.$visavis_heatmap {

		json() {
			return this.plot().json() as any
			// return $visavis_heatmap_json( this.plot().json() as any )
		}

		@ $mol_mem
		layout() {
			return {
				showlegend: false,
				hovermode: "closest",
				xaxis: {
					autorange: true,
					showgrid: false,
					showline: true, //false,
					zeroline: false, //true,
					showticklabels: false
				},
				xaxis2: {
					autorange: true,
					showgrid: false,
					showline: true, //false,
					zeroline: false, //true,
					showticklabels: false,
					side: "top",
					overlaying: 'x'
				},
				yaxis: {
					autorange: true,
					showgrid: false,
					showline: true, //false,
					zeroline: false, //true,
					showticklabels: false
				},
				yaxis2: {
					autorange: true,
					showgrid: false,
					showline: true, //false,
					zeroline: false, //true,
					showticklabels: false,
					side: "right",
					overlaying: 'y'
				}
			}
		}

		@ $mol_mem
		data() {

			const json = this.json()

			let data_x = json.payload.x
			let data_y = json.payload.y
			let data_z = json.payload.z

			if (!json.odet) {
				var dice = Math.floor(Math.random() * 100) % 3;
				if (dice === 0){
					data_x = json.payload.x
					data_y = json.payload.y
					data_z = json.payload.z
				} else if (dice === 1){
					data_x = json.payload.x
					data_y = json.payload.z
					data_z = json.payload.y
				} else {
					data_x = json.payload.y
					data_y = json.payload.z
					data_z = json.payload.x
				}
			}

			return [
				{
					type: "scatter",
					mode: "markers",
					hoverinfo: "text",
					x: data_x,
					y: data_y,
					text: json.payload.labels || Array(data_x.length).fill('Point'),
					marker: {color: data_z, colorscale: 'Rainbow', size: 4, opacity: 0.9}
				},
				{x: [], y: [], type: 'scatter', xaxis: 'x', yaxis: 'y'},
				{x: [], y: [], type: 'scatter', xaxis: 'x2', yaxis: 'y2'}
			]	
		}

	}
	
}
