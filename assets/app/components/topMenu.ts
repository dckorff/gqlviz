// TODO: put @angular in a better place fix this path
import { Component } from '@angular/core';
//import { Component } from '@angular/core';

@Component({
  selector: 'top-menu',
  template: `
    <style>
      .header-server-selector {
        display: inline-block;
        margin-top: 12px;
        width: 600px;
      }
    </style>
		<div class="top_nav">

      <div class="nav_menu">
        <nav class="" role="navigation">
          <div class="nav toggle">
            <a id="menu_toggle"><i class="fa fa-bars"></i></a>
          </div>

          <ul class="nav navbar-nav navbar-right">

            <li role="presentation" class="dropdown">
              
            </li>

          </ul>

          <input type="text" class="form-control header-server-selector" [(ngModel)]="graphQlServer" >              

        </nav>
      </div>

    </div>
  `
})
export class TopMenu { 

  graphQlServer: string;

  constructor(){
    this.graphQlServer = "http://localhost:3000";
  }

}
