import { GQLConnectionService } from './GQLConnectionService';
import { HTTP_PROVIDERS }    from '@angular/http';


export class GraphQLMetaData {

    gqlConnectionService: GQLConnectionService;

	constructor(){
        this.gqlConnectionService = new GQLConnectionService();
	}
	
    getTypes() { 
        var query = `
        {
            __schema {
                types {
                      name
                }
            }
        }
        `;
        return this.getMetaData(query);
    }

    getTypeDetails(typeName: string) { 
        var query = `
        {
            __type(name: "`+ typeName +`") {
                name
                fields {
                    name
                    type {
                        name
                        kind
                    }
                }
            }
        }
        `;
        return this.getMetaData(query);
    }

	getMetaData(queryString: string) {	

        var query = {
            query: queryString
        };

		return new Promise((resolve, reject)=>{

			$.ajax({
                url: this.gqlConnectionService.getGraphQlServerUrl() + "/graphql",
                method: "POST",
				data: query,
				dataType: "json",				
				success: function(response) {
				console.log("response");
					console.log(response.data);
					resolve(response);
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