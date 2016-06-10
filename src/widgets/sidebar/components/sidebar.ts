import {Component} from '@angular/core';
//import {ROUTER_DIRECTIVES} from '@angular/router';
import {RouteConfig,ROUTER_DIRECTIVES,Router} from '@angular/router-deprecated';
import { CORE_DIRECTIVES , FORM_DIRECTIVES} from '@angular/common';
import { ACCORDION_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap';
import {GridCmp} from '../../../pages/grid/components/grid';


@Component({
	selector: 'sidebar',
	templateUrl: './widgets/sidebar/components/sidebar.html',
	directives: [ROUTER_DIRECTIVES, ACCORDION_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES]
})
@RouteConfig([
	{ path: '/grid', component: GridCmp, as: 'Grid' }
])
export class SidebarCmp {
	isActive = false;
	public oneAtATime:boolean = true;

	public status:Object = {
	  isFirstOpen: false,
	  isFirstDisabled: false
	};

	public groups:Array<any> = [
		{
		    title: 'Dynamic Group Header - 1',
		    content: 'Dynamic Group Body - 1'
		},
		{
		    title: 'Dynamic Group Header - 2',
		    content: 'Dynamic Group Body - 2'
		}
	];
	eventCalled() {
		this.isActive = !this.isActive;
	}
}
