import { Component } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  session = false;
  constructor( public _cs: ContactsService ) { }

  enter( provider: string ) {
    console.log(provider);
    this._cs.login( provider );
    this.session = true;
  }
  out() {
    this._cs.logout();
    this.session = false;
  }
}
