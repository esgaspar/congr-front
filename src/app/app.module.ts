import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddContactComponent } from './lib/components/contact/add-contact/add-contact.component';
import { EditContactComponent } from './lib/components/contact/edit-contact/edit-contact.component';
import { RemoveContactComponent } from './lib/components/contact/remove-contact/remove-contact.component';
import { ListContactComponent } from './lib/components/contact/list-contact/list-contact.component';

import { AddMeetingComponent } from './lib/components/meeting/add-meeting/add-meeting.component';
import { EditMeetingComponent } from './lib/components/meeting/edit-meeting/edit-meeting.component';
import { RemoveMeetingComponent } from './lib/components/meeting/remove-meeting/remove-meeting.component';
import { ListMeetingComponent } from './lib/components/meeting/list-meeting/list-meeting.component';

import { HttpClientModule } from '@angular/common/http';
import { MenuHeaderComponent } from './lib/components/menu-header/menu-header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './lib/components/contact/contact.component';
import { MeetingComponent } from './lib/components/meeting/meeting.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatStepperModule, MatIconModule } from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,

    AddContactComponent,
    EditContactComponent,
    RemoveContactComponent,
    ListContactComponent,

    AddMeetingComponent,
    EditMeetingComponent,
    RemoveMeetingComponent,
    ListMeetingComponent,


    MenuHeaderComponent,
    ContactComponent,
    MeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
