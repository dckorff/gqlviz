// TODO: put @angular in a better place fix this path
import { Component } from '@angular/core';
import { SchemaService } from '../services/SchemaService'
//import { Component } from '@angular/core';

@Component({
  //providers: [SchemaService],
  selector: 'filter-panel',
  template: `   
	  <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_title">
          <h2>{{getSelectedType().name}} Filter</h2>
          <ul class="nav navbar-right panel_toolbox">
            <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="#">Settings 1</a></li>
                <li><a href="#">Settings 2</a></li>
              </ul>
            </li>
            <li><a class="close-link"><i class="fa fa-close"></i></a></li>
          </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">
        <ul>
          <li *ngFor="let arg of getSelectedRootQueryType(getSelectedType()).args" >#{{arg.name}}</li>
        </ul>
      </div>
    </div>
  `
})
export class FilterPanel { 

  graphQlServer: string;

  constructor(private schemaService: SchemaService) {

  }

  getSelectedType() {
    
    console.log("getSelectedType!");
    console.log(this.schemaService);

    if(!this.schemaService.__schema){ return { name: "NA", args: [] }; }
    
    //let item = this.schemaService.__schema.types.find(item => { return item.active == 'active'; });
    
    let item = this.schemaService.selectedType;

    if(item) {      
      return item;      
    }
    else {
      let fakeItem: any = {};
      fakeItem.name = "NA"
      fakeItem.args = [];
      return fakeItem;
    }
    
  }

  getSelectedRootQueryType(type) {
    let rootQueryType = this.schemaService.__schema.types.find(item => { return item.name == 'RootQueryType'; });
    
    console.log('rootQueryType');
    console.log(rootQueryType);

    if(!rootQueryType || !rootQueryType.fields) { return []; }

    let selectedRootQueryType = rootQueryType.fields.find( field => {return field.name == type.name} );

    if (!selectedRootQueryType) { selectedRootQueryType = {}; }
    if (!selectedRootQueryType.args) { selectedRootQueryType.args = [ { name: ''} ]; }

    return selectedRootQueryType;
    
  }

}
