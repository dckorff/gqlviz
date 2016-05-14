// TODO: put @angular in a better place fix this path
import { Component } from '@angular/core';
import { GraphQLMetaData } from '../services/GraphQLMetaData'
//import { Component } from '@angular/core';

@Component({
  selector: 'side-menu-left',
  template: `
  <div class="col-md-3 left_col">
    <div class="left_col scroll-view">
      <div class="navbar nav_title" style="border: 0;">
        <a href="/" class="site_title"><span>GraphQL Visualizer</span></a>
      </div>

      <div class="clearfix"></div>

      <!-- sidebar menu -->
      <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
        <div class="menu_section">
          <h3>Schema</h3>
          <ul class="nav side-menu">
            <li *ngFor="let item of schemaItems; let i = index"><a><i class="fa fa-folder"></i>{{item}}</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
})
export class SideMenuLeft { 

  gqlMetaData: GraphQLMetaData

  schemaItems: string[];

  //me: any;

  constructor() {
    this.schemaItems = [];
    this.gqlMetaData = new GraphQLMetaData();
    this.gqlMetaData.getMetaData().then( (response: any) => { 
      response.data.__schema.types.forEach( item => {
        this.schemaItems.push(item.name) 
      });
    });
  }

}
