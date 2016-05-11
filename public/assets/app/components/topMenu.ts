// TODO: put @angular in a better place fix this path
import { Component } from '../../vendor/typescript/typings/@angular/core';
//import { Component } from '@angular/core';

@Component({
  selector: 'header-menu',
  template: `
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
            </nav>
          </div>

        </div>
  `
})
export class TopMenu { }
