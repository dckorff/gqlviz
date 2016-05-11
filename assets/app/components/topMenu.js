"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO: put @angular in a better place fix this path
var core_1 = require('@angular/core');
//import { Component } from '@angular/core';
var TopMenu = (function () {
    function TopMenu() {
    }
    TopMenu = __decorate([
        core_1.Component({
            selector: 'top-menu',
            template: "\n\t\t<div class=\"top_nav\">\n\n          <div class=\"nav_menu\">\n            <nav class=\"\" role=\"navigation\">\n              <div class=\"nav toggle\">\n                <a id=\"menu_toggle\"><i class=\"fa fa-bars\"></i></a>\n              </div>\n\n              <ul class=\"nav navbar-nav navbar-right\">\n\n                <li role=\"presentation\" class=\"dropdown\">\n                  \n                </li>\n\n              </ul>\n            </nav>\n          </div>\n\n        </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TopMenu);
    return TopMenu;
}());
exports.TopMenu = TopMenu;
//# sourceMappingURL=topMenu.js.map