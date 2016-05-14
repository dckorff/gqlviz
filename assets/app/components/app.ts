// TODO: put @angular in a better place fix this path
import { Component } from '@angular/core';
import { TopMenu } from './TopMenu';
import { SideMenuLeft } from './SideMenuLeft';

@Component({
	selector: 'app',
  directives: [TopMenu, SideMenuLeft],
  template: `
		<top-menu></top-menu>
		<side-menu-left></side-menu-left>
  `
})
export class App { 
	constructor(){
		console.log("app component says hello");
	}
}
