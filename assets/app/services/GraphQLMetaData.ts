import { GQLConnectionService } from './GQLConnectionService';
import { HTTP_PROVIDERS }    from '@angular/http';


export class GraphQLMetaData {

    gqlConnectionService: GQLConnectionService;

	constructor(){
        this.gqlConnectionService = new GQLConnectionService("");
	}
	
	getMetaData() {
		var query1 = {
			query: `
			query IntrospectionQuery { 
				__schema {
		    		types {
		      			name
		    		}
		  		}
		  	}`
		};

		var query2 = {
			query: `
			 query IntrospectionQuery { 
				__schema { 
					queryType { name } 
					mutationType { name } 
					subscriptionType { name } 					
					directives { 
						name description args { ...InputValue } 
						onOperation onFragment onField 
					}
				} 
			} 
			`
		};

		return new Promise((resolve, reject)=>{

			$.ajax({
                url: this.gqlConnectionService.getGraphQlServerUrl() + "/graphql",
				      method: "POST",
				//crossDomain: true,
				//data: JSON.stringify(query),
				data: query1,
				dataType: "json",
				//contentType: 'application/json',
				   success: function(response) {
				console.log("response");
					console.log(response);
					resolve(response);
					//callback(response, context);
				},
				error: function(xhr, status) {
				    console.log("error");
				    console.log(xhr);
					reject(status);
				}
			});

		});


		

		
	}
	

}