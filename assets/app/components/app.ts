// TODO: put @angular in a better place fix this path
import { Component } from '@angular/core';
import { TopMenu } from './TopMenu';
import { SideMenuLeft } from './SideMenuLeft';
import { FilterPanel } from './FilterPanel';
import { SchemaService } from '../services/SchemaService'

@Component({
	providers: [SchemaService],
	selector: 'app',
	directives: [TopMenu, SideMenuLeft, FilterPanel],
  	template: `
		<top-menu></top-menu>
		<side-menu-left></side-menu-left>
		<div class="right_col" role="main" style="min-height: 496px;">
			<filter-panel></filter-panel>
		</div>
  `
})
export class App {
	constructor() {
		console.log("app component says hello");
	}
}
