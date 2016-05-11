///  <reference path="../vendor/typescript/typings/jquery/jquery.d.ts"/> 

import {Test} from "./test"

export class App {

	test: Test;

	constructor(){
		console.log("test ok");
		this.test = new Test();
	}

	getMetaData(){
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


		$.ajax({
            url: "http://localhost:3000/graphql?asdf",
            method: "POST",
            //crossDomain: true,
            //data: JSON.stringify(query),
            data: query1,
            dataType: "json",
            //contentType: 'application/json',
            success: function(response) {
				console.log(response);                
            },
            error: function(xhr, status) {
                console.log("error");
                console.log(xhr);
            }
        });

		
	}

}

//declare window: any;
//window.app = new App();