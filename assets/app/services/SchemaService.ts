import { Injectable } from '@angular/core';
import { GQLConnectionService } from './GQLConnectionService';
import { HTTP_PROVIDERS }    from '@angular/http';


@Injectable()
export class SchemaService {

gqlConnectionService: GQLConnectionService;

	schema: any;
	__schema: any;

  // The type that was selected in the left menu
  // TODO: find a better way to communicate this 
  //   the Filter Panel needs to know what item was selected in the left side menu
  //   but that has nothing to do with this schema service
  selectedType: any;

	constructor(){
		this.gqlConnectionService = new GQLConnectionService();
		this.__schema = {};
		this.__schema.types = [{name: 'test'}];
		console.log("CONSTRUCT schemaService");
		this.getSchema();
	}

	getSchema() {
		var query = `
        {
            __schema {
                types {
                    name,
                    description,
                    fields {
	                    name,
	                    description,
	                    args {
						  name,
						  description,
						  type {
						  	name,
						  	kind,
						  	ofType {
						  		name					  		
						  	}
						  }					  
						}
	                    type {
	                        name,
	                        kind,
	                        ofType {
	                            name,
	                            kind
	                        }
	                    }
                	}
                }
            }
        }
        `;


		let me: any = this;

		return this.getMetaData(query, (response) => {
			//response.__schema.types.forEach(item => {
			me.__schema = response.__schema;
			console.log("me.__schema");
			console.log(me.__schema);
			//});
		});

	}

	getTypes() { 
		var query = `
        {
            __schema {
                types {
                    name,
                    description
                }
            }
        }
        `;

		let me : any= this;

		return this.getMetaData(query, (response) => { 
			  	response.__schema.types.forEach( item => {            
            		let thisItem : any = { name: item.name, active: '' };
            		thisItem.__type = { fields: [] };
            		me.schema.items.push(thisItem);
        		});  
			}
        );
    }

    getTypeDetails(typeName: string) { 
        var query = `
        {
            __type(name: "`+ typeName +`") {
                name
                fields {
                    name,
                    description,
                    args {
					  name,
					  description,
					  type {
					  	name,
					  	kind,
					  	ofType {
					  		name					  		
					  	}
					  }					  
					}
                    type {
                        name,
                        kind,
                        ofType {
                            name,
                            kind
                        }
                    }
                }
            }
        }
        `;

		let item = this.schema.items.find(item => { return item.name == typeName; });

	    if (item.__type.fields.length == 0) {

			return this.getMetaData(query, (response) => {
				console.log("response getTypeDetails");
				console.log(response)
				item.active = "active";
				item.__type = response.__type;          
		    });

	    }

    }


    getArgs(typeName: string) {

		let rootQueryType = this.getRootQueryType();

		let rootQueryTypeField = rootQueryType.fields.find(field => { return field.name == typeName; });

		return rootQueryTypeField.args;

    }

    getRootQueryType() {
    	return this.__schema.types.find(type => { return type.name == "RootQueryType"; } )
    }


	getMetaData(queryString: string, postProcess) {	

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
					postProcess(response.data);
					resolve(response.data);
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