import { Component } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  contacts: any[] = [];
  loading: boolean;
  constructor( private _contactsService: ContactsService ) { }

}
