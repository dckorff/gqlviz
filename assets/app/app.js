///  <reference path="../vendor/typescript/typings/jquery/jquery.d.ts"/> 
"use strict";
var test_1 = require("./test");
var App = (function () {
    function App() {
        console.log("test ok");
        this.test = new test_1.Test();
    }
    App.prototype.getMetaData = function () {
        var query1 = {
            query: "\n\t\t\tquery IntrospectionQuery { \n\t\t\t\t__schema {\n\t\t    \t\ttypes {\n\t\t      \t\t\tname\n\t\t    \t\t}\n\t\t  \t\t}\n\t\t  \t}"
        };
        var query2 = {
            query: "\n\t\t\t query IntrospectionQuery { \n\t\t\t\t__schema { \n\t\t\t\t\tqueryType { name } \n\t\t\t\t\tmutationType { name } \n\t\t\t\t\tsubscriptionType { name } \t\t\t\t\t\n\t\t\t\t\tdirectives { \n\t\t\t\t\t\tname description args { ...InputValue } \n\t\t\t\t\t\tonOperation onFragment onField \n\t\t\t\t\t}\n\t\t\t\t} \n\t\t\t} \n\t\t\t"
        };
        $.ajax({
            url: "http://localhost:3000/graphql?asdf",
            method: "POST",
            //crossDomain: true,
            //data: JSON.stringify(query),
            data: query1,
            dataType: "json",
            //contentType: 'application/json',
            success: function (response) {
                console.log(response);
            },
            error: function (xhr, status) {
                console.log("error");
                console.log(xhr);
            }
        });
    };
    return App;
}());
exports.App = App;
//declare window: any;
//window.app = new App(); 
//# sourceMappingURL=app.js.map