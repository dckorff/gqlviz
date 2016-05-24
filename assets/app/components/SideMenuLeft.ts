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
            <li *ngFor="let item of schemaItems; let i = index" (click)="clickType(item.name)" class="{{item.active}}">
              <a><i class="fa fa-folder"></i>{{item.name}}</a> 
              <ul class="nav child_menu" [style.display]="isActive(item)" >
                <li *ngFor="let field of item.__type.fields"><a>{{field.name}}</a></li>
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

  gqlMetaData: GraphQLMetaData

  schemaItems: any;

  constructor() {
    this.schemaItems = [];
    this.gqlMetaData = new GraphQLMetaData();
    this.gqlMetaData.getTypes().then( (response: any) => {
        response.__schema.types.forEach( item => {            
            let thisItem : any = { name: item.name, active: '' };
            thisItem.__type = { fields: [] };
            this.schemaItems.push(thisItem);
        });
    });
  }

  clickType(itemName) {
    console.log("clickType");
    let item = this.schemaItems.find(item => { return item.name == itemName; })

    if (item.__type.fields.length == 0) {

      this.gqlMetaData.getTypeDetails(itemName).then((response: any) => {          
        item.active = "active";
        item.__type = response.__type;          
      });

    }
    else {
      item.active = (item.active == "active") ? "" : "active";
    }

  }

  isActive(item) : boolean{

    if (item.active == "active"){      
      return "block";
    }
    else {      
      return "none";
    }
  }

}
