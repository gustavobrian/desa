import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector: 'grid',
    templateUrl: './pages/grid/components/grid.html'
})

export class GridCmp {
	constructor(private _router: Router) { }
	gotoDashboard() {
		this._router.navigate(['Home']);
	}
}
