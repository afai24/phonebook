import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from '../../interfaces/contact.interface';
import * as $ from 'jquery';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: any;
  session = false;

  constructor( private _contactsService: ContactsService ) {
    this._contactsService.getContacts()
      .subscribe( contacts => {
        console.log(contacts);
        this.contacts = contacts;
      });
   }

  ngOnInit() {
  }

  deleteContacts(key$: string) {
    this._contactsService.deleteContact(key$)
      .subscribe( response => {
        if (response) {
          console.error(response);
        } else {
          delete this.contacts[key$];
        }
      });
  }

  search(term: string) {
    console.log(term);
    $(document).ready(function() {
      $('tr:not(:has(th)):not(:contains(' + term + '))').hide();
    });
  }

  enter( provider: string ) {
    console.log(provider);
    this._contactsService.login( provider );
    this.session = true;
  }
  out() {
    this._contactsService.logout();
    this.session = false;
    window.location.reload();
  }
}
