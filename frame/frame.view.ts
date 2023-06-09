namespace $.$$ {

	export class $visavis_frame extends $.$visavis_frame {

		@ $mol_mem
		plot_raw() {
			const href = this.$.$mol_state_arg.href()
			const hash = href.split('#')[1]

			const json: any = $mol_fetch.json( hash )
			
			if( json.error ) return $mol_fail( new $mol_data_error( json.error ) )
			
			return $visavis_plot_raw_from_json( json )
		}

		@ $mol_action
		post_message( name: string, args: any ) {
			window.parent.postMessage({ name, args }, '*')
		}

		auto() {
			return this.message_listener()
		}

		@ $mol_mem
		message_listener() {
			return new $mol_dom_listener(
				$mol_dom_context,
				'message',
				$mol_wire_async( this ).message_receive
			)
		}
		
		message_receive( event?: MessageEvent<{ name: keyof ReturnType<$visavis_frame["message_handler"]>, args: any }> ) {
			if( !event ) return
			
			const handler = this.message_handler()[ event.data.name ]
			if( !handler ) {
				$mol_fail_log( new $mol_data_error(`no handler for message "${ event.data.name }"`) )
			}

			handler( event.data.args )
		}

		@ $mol_mem
		message_handler(){
			return {

				discovery_elementals_on: (args: any)=> {
					const { elementals_on } = $mol_data_record({
						elementals_on: $mol_data_array( $mol_data_string )
					})( args )

					this.discovery_elementals_on( elementals_on )
				},

				matrix_order: (args: any)=> {
					const { x_sort, y_sort, x_op, y_op } = $mol_data_record({
						x_sort: $mol_data_string, 
						y_sort: $mol_data_optional( $mol_data_string ),
						x_op: $mol_data_optional( $mol_data_string ),
						y_op: $mol_data_optional( $mol_data_string ),
					})( args )

					// this.matrix_order( x_sort, y_sort, x_op, y_op )
				},

				cube_order: (args: any)=> {
					const { x_sort, y_sort, z_sort, x_op, y_op, z_op } = $mol_data_record({
						x_sort: $mol_data_string, 
						y_sort: $mol_data_string,
						z_sort: $mol_data_string,
						x_op: $mol_data_optional( $mol_data_string ),
						y_op: $mol_data_optional( $mol_data_string ),
						z_op: $mol_data_optional( $mol_data_string ),
					})( args )

					this.x_sort( x_sort )
					this.y_sort( y_sort )
					this.z_sort( z_sort )
					this.x_op( x_op )
					this.y_op( y_op )
					this.z_op( z_op )

				},

				graph_rel_change: (args: any)=> {
					const { rel } = $mol_data_record({
						rel: $mol_data_optional( $mol_data_string ),
					})( args )

					this.graph_rel( rel )
				},

				cmp_discard: (args: any)=> {
					const { type } = $mol_data_record({
						type: $mol_data_string,
					})( args )

					// if (!visavis.cache || visavis.cache.type != type || !visavis.cache.cmp)
					// 	return notify('Comparison was reset');
			
					// reset_canvas();
				
					// if (type == 'matrix'){
					// 	delete visavis.cache.cmp;
					// 	visavis__matrix(visavis.cache.ref);
				
					// } else if (type == 'cube'){
					// 	delete visavis.cache.cmp;
					// 	visavis__plot3d();
				
					// } else if (type == 'discovery'){
					// 	var rerun = {payload: {points: visavis.cache.ref.points}, answerto: visavis.cache.ref.name};
					// 	visavis.cache = null;
					// 	visavis__discovery(rerun);
					// }
				},

				cmp_download: (args: any)=> {
					const { url, type } = $mol_data_record({
						url: $mol_data_string,
						type: $mol_data_string,
					})( args )

					// if (!visavis.cache || visavis.cache.type != type)
					// 	return urge('Error: cannot compare datasets');
				
					
					// call_ajax(url, function(cmp_data){
						
						// 	show_preloader();
						// 	reset_canvas();
						
					const json_cmp = $mol_fetch.json( url ) as any
					if (json_cmp && json_cmp.error) return $mol_fail( new $mol_data_error( json_cmp.error ) )
					if (!json_cmp || !json_cmp.use_visavis_type) return $mol_fail( new $mol_data_error( 'Error: unknown data format' ) )
					// if (json_cmp.warning) notify(json_cmp.warning);

					this.json_cmp( json_cmp )

					if (type == 'matrix'){
						this.nonformers_shown( false )
			
						// Prepare a master merged matrix from ref and cmp
						var master_matrix = JSON.parse(JSON.stringify( this.json() ));
						json_cmp.payload.links.forEach( (item: any)=> {
							item.cmp = 1;
							master_matrix.payload.links.push(item);
						});

						// visavis__matrix(master_matrix);
						// visavis.cache.cmp = {payload: {links: json_cmp.payload.links}, answerto: json_cmp.answerto};
						// set_cmp_legend([visavis.cache.cmp.answerto, visavis.cache.ref.answerto], true);

					} else if (type == 'cube'){
						// this.nonformers_shown( false )
						// visavis.cache.cmp = {payload: {points: json_cmp.payload.points}, answerto: json_cmp.answerto};
						// visavis__plot3d();
						// set_cmp_legend([visavis.cache.cmp.answerto, visavis.cache.ref.answerto], true);

					} else if (type == 'discovery'){
						// visavis__discovery(json_cmp);
						// set_cmp_legend([json_cmp.answerto, visavis.cache.ref.name]);
					}
				},

				fixel_manage: (args: any)=> {
					const { status } = $mol_data_record({
						status: $mol_data_boolean,
					})( args )

					// visavis.fixel_shown = !!status;
					// if (!visavis.fixel_shown) document.getElementById('fixel_do').checked = false;
				},

			}

		}
		
	}

}
