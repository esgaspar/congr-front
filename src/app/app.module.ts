import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './lib/components/contact/add-contact/add-contact.component';
import { EditContactComponent } from './lib/components/contact/edit-contact/edit-contact.component';
import { RemoveContactComponent } from './lib/components/contact/remove-contact/remove-contact.component';
import { ListContactComponent } from './lib/components/contact/list-contact/list-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuHeaderComponent } from './lib/components/menu-header/menu-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './lib/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    EditContactComponent,
    RemoveContactComponent,
    ListContactComponent,
    MenuHeaderComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
