import {Component,ViewEncapsulation} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
//import {Home} from '../home/home';
import {Login} from '../login/login';
import {DashboardCmp} from '../dashboard/dashboard';

//import {Signup} from '../signup/signup';
//import {DashboardCmp} from '../../layout/dashboard/components/dashboard.ts';

let template = require('./app.html');

@Component({
  selector: 'app',
  template: template,
  encapsulation: ViewEncapsulation.None,
  directives: [ ROUTER_DIRECTIVES ]
})

@RouteConfig([
  { path: '/', redirectTo: ['/Login'] },
  { path: '/login', component: Login, as: 'Login', useAsDefault:true},
//  { path: '/home', component: Home, as: 'Home'},
  { path: '/dashboard/...', component: DashboardCmp, as: 'Dashboard' }
])
export class App{}
