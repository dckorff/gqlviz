///  <reference path="../vendor/typescript/typings/jquery/jquery.d.ts"/> 
"use strict";
var GraphQLAPI = (function () {
    function GraphQLAPI(graphQlUrl) {
        this.graphQlUrl = graphQlUrl;
    }
    GraphQLAPI.prototype.getMetaData = function () {
        // return new Promise(
        // 	(resolve, reject) => {
        // 		$.get(graphQlMetaDataUrl)
        // 			.done(result => { resolve(result); })
        // 			.fail(function(){})
        // 	}
        // );	
    };
    return GraphQLAPI;
}());
exports.GraphQLAPI = GraphQLAPI;
//# sourceMappingURL=GraphQLAPI.js.map