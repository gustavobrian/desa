import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';

//import {DROPDOWN_DIRECTIVES, ACCORDION_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {RouteConfig,ROUTER_DIRECTIVES,Router} from '@angular/router-deprecated';

//import {Home} from '../../../pages/home/home';


@Component({
	selector: 'topnav',
	templateUrl: './src/widgets/topnav/components/topnav.html',
	directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES]
})
export class TopNavCmp {
}
