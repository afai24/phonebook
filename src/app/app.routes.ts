import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contacts/contact.component';

const app_routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'contact/:id', component: ContactComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'contacts' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
