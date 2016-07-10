// TODO: put @angular in a better place fix this path
import { Component } from '@angular/core';
import { GraphQLMetaData } from '../services/GraphQLMetaData'
import { SchemaService } from '../services/SchemaService'
//import { Component } from '@angular/core';

@Component({
  //providers: [SchemaService],
  selector: 'side-menu-left',
  styles: [`
    .main_menu_side {
      height: calc(100vh - 55px);
      overflow: auto;
    }
  `],
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
          <ul class="nav side-menu">
            <li *ngFor="let item of schemaService.__schema.types; let iItem = index" class="{{selectedItems[iItem] ? 'active': ''}}">
              <a (click)="clickType(iItem)" ><i class="fa fa-folder"></i>{{item.name}}</a>
              <ul class="nav child_menu" [style.display]="selectedItems[iItem] ? 'block' : 'none'" >
                <li *ngFor="let field of item.fields"><a>{{field.name}}</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
})
export class SideMenuLeft { 

  // Track which types have been selected/expanded
  selectedItems: Array<boolean>;

  constructor(private schemaService: SchemaService) {    
    this.selectedItems = [];
  }

  clickType(iItem) {
    // Toggle the item that was clicked
    this.selectedItems[iItem] = !this.selectedItems[iItem];
    this.schemaService.selectedType = this.schemaService.__schema.types[iItem];
  }

}
