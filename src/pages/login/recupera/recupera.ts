import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES ,FormBuilder, Validators, ControlGroup, AbstractControl} from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../../../common/headers';
import { EmailValidator } from '../../../validators/customvalidator';


let styles   = require('./recupera.css');
let template = require('./recupera.html');

@Component({
  selector: 'recupera',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  template: template,
  styles: [ styles ]
})
export class Recupera {
   recuperaForm:ControlGroup
   email: AbstractControl;

  constructor(builder: FormBuilder,public router: Router, public http: Http) {
    this.recuperaForm = builder.group({
      email: ["", Validators.compose([
        Validators.required, EmailValidator.email
      ])]
    })

    this.email = this.recuperaForm.controls["email"];

  }

  private recuperar(event, email) {
    event.preventDefault();
    let id:Number=1;
    let body = JSON.stringify({ id });
    this.http.post('http://localhost:8888/laravel/public/show', body
    , { headers: contentHeaders })
      .subscribe(
        response => {
        //  localStorage.setItem('jwt', response.json().token);
        //  this.router.parent.navigateByUrl('/home');
	      //  this.router.navigate(['Dashboard']);
      //    this.router.navigateByUrl('/dashboard/...');
        //  this.router.navigate(['Dashboard']);
        },
        error => {
          alert(error.json().error);
        //  alert(error.text());
          console.log(error.text());
        }
      );
  }

  private volver() {
    event.preventDefault();
  //  this.router.parent.navigateByUrl('/login');
    this.router.navigate(['Login']);
  }


}
