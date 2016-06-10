import { Component, ViewEncapsulation } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {TopNavCmp} from '../../widgets/topnav/components/topnav';
import {Home} from '../home/home';
import {UsuarioComponent} from '../usuario/usuario.component';
//import { contentHeaders } from '../common/headers';

let template = require('./dashboard.html');


@Component({
  selector: 'dashboard',
  directives: [ROUTER_DIRECTIVES, TopNavCmp],
  encapsulation: ViewEncapsulation.None,
  template: template

})

@RouteConfig([
  //  { path: '/', component: Home, as: 'Home'},
    { path: '/', component: Home, as: 'Home', useAsDefault:true},
    { path: '/usuario/...', component: UsuarioComponent, as: 'Usuario'}
])

export class DashboardCmp {
}
