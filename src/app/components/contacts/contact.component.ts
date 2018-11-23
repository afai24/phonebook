import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../../interfaces/contact.interface';
import { ContactsService } from '../../services/contacts.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

contact: any = {
    name: '',
    lastname: '',
    phone: ''
  };

  new = false;
  id: string;

  constructor(private _contactService: ContactsService,
     private router: Router,
      private route: ActivatedRoute ) {
        this.route.params.subscribe( parameters => {
          this.id = parameters['id'];
          if (this.id !== 'new') {
            this._contactService.getContact(this.id)
              .subscribe( contact => this.contact = contact );
          }
        });
      }

  ngOnInit() {
  }

  save() {
    console.log(this.contact);
    if (this.id === 'new') {
      this._contactService.newContact(this.contact)
      .subscribe( data => {
        this.router.navigate(['/contact', data.name]);
      },
      error => console.error(error)
      );
    } else {
      this._contactService.updateContact(this.contact, this.id)
      .subscribe( data => {
        console.log(data);
      },
      error => console.error(error)
      );
    }

  }

  addNew(forma: NgForm) {
    this.router.navigate(['/contact', 'new']);

    forma.reset();
  }

  

}
