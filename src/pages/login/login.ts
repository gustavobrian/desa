import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES ,FormBuilder, Validators, ControlGroup, AbstractControl} from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../../common/headers';
import { EmailValidator } from '../../validators/customvalidator';
import { MODAL_DIRECTIVES, ModalComponent } from '../../../node_modules/ng2-bs3-modal/ng2-bs3-modal';
import { Usuario } from '../../classes/usuario';


let styles   = require('./login.css');
let template = require('./login.html');

@Component({
  selector: 'login',
  directives: [RouterLink, CORE_DIRECTIVES, FORM_DIRECTIVES ,MODAL_DIRECTIVES],
  template: template,
  styles: [ styles ]
})
export class Login {

  loginForm: ControlGroup;
  email: AbstractControl;
  password: AbstractControl;

  usuario:Usuario;

  //constructor(public router: Router, public http: Http) {
//  }

  constructor(builder: FormBuilder,public router: Router, public http: Http)
  {
    this.loginForm = builder.group({
      email: ["", Validators.compose([
        Validators.required, EmailValidator.email
      ])],
      password: ["", Validators.compose([
        Validators.required, Validators.minLength(4)
      ])]
    })

    this.email = this.loginForm.controls["email"];
    this.password = this.loginForm.controls["password"];
  //  this.password.value ='';
  }

  login(event, email, clave) {
    event.preventDefault();

    let body = JSON.stringify({ email, clave });
    this.http.post('http://192.168.56.100/laravel/public/loginjwt', body
    , { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('jwt', response.json().token);
          this.router.navigate(['Dashboard']);
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  recuperar(email) {
    event.preventDefault();
    //this.router.parent.navigateByUrl('/recupera');
    this.router.navigate(['Recupera']);
  }

  signup(event) {
    event.preventDefault();
    this.router.parent.navigateByUrl('/signup');
  }

}
