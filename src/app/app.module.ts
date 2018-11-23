import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactComponent } from './components/contacts/contact.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

// import routes
import { APP_ROUTING } from './app.routes';

// import services
import { ContactsService } from './services/contacts.service';
import { KeysPipe } from './pipes/keys.pipe';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { CardsComponent } from './components/cards/cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NavbarComponent,
    ContactComponent,
    KeysPipe,
    LoadingComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
