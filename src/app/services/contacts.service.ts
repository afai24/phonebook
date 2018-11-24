import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Contact } from '../interfaces/contact.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public users: any = {};
  contactsUrl = 'https://phonebook-46c42.firebaseio.com/contacts.json';
  contactUrl = 'https://phonebook-46c42.firebaseio.com/contacts/';
  constructor( private http: Http, public afAuth: AngularFireAuth ) {
    this.afAuth.authState.subscribe(user => {
       console.log(user);
      if (!user) {
        return;
      }
      this.users.name = user.displayName;
      this.users.uid = user.uid;
    });
  }

  login( provider: string ) {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  newContact( contact: Contact) {
    const body = JSON.stringify(contact);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.contactsUrl, body, { headers }).pipe(
      map( res => {
        console.log(res.json());
        return res.json();
      }));
  }

  updateContact( contact: Contact, key$: string) {
    let body = JSON.stringify(contact);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    let url = `${ this.contactUrl }/${ key$ }.json`;
    return this.http.put( url, body, { headers }).pipe(
      map( res => {
        console.log(res.json());
        return res.json();
      }));
  }

  getContact(key$: string) {
    let url = `${ this.contactUrl }/${ key$ }.json`;
    return this.http.get(url).pipe(
      map( res => res.json())
    );
  }

  getContacts() {
    return this.http.get(this.contactsUrl).pipe(
      map( res => res.json())
    );
  }

  deleteContact( key$: string ) {
    let url = `${ this.contactUrl }/${ key$ }.json`;
    return this.http.delete( url ).pipe(
      map( res => res.json())
    );
  }

}
