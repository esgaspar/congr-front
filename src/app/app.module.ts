import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './lib/components/user/add-user/add-user.component';
import { EditUserComponent } from './lib/components/user/edit-user/edit-user.component';
import { RemoveUserComponent } from './lib/components/user/remove-user/remove-user.component';
import { ListUserComponent } from './lib/components/user/list-user/list-user.component';

import { AddMeetingComponent } from './lib/components/meeting/add-meeting/add-meeting.component';
import { EditMeetingComponent } from './lib/components/meeting/edit-meeting/edit-meeting.component';
import { RemoveMeetingComponent } from './lib/components/meeting/remove-meeting/remove-meeting.component';
import { ListMeetingComponent } from './lib/components/meeting/list-meeting/list-meeting.component';

import { HttpClientModule } from '@angular/common/http';
import { MenuHeaderComponent } from './lib/components/menu-header/menu-header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './lib/components/user/user.component';
import { MeetingComponent } from './lib/components/meeting/meeting.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatStepperModule, MatIconModule } from '@angular/material';
import { InputIconComponent } from './lib/components/class/input-icon/input-icon.component';
import { LoginComponent } from './lib/components/login/login.component';
import { RegisterComponent } from './lib/components/register/register.component';
import { AlertComponent } from './lib/components/class/alert/alert.component';
import { DashboardComponent } from './lib/components/dashboard.component';
import { CongregationComponent } from './lib/components/congregation/congregation.component';
import { RadioComponent } from './lib/components/class/radio/radio.component';



@NgModule({
  declarations: [
    AppComponent,

    AddUserComponent,
    EditUserComponent,
    RemoveUserComponent,
    ListUserComponent,

    AddMeetingComponent,
    EditMeetingComponent,
    RemoveMeetingComponent,
    ListMeetingComponent,


    MenuHeaderComponent,
    UserComponent,
    MeetingComponent,
    InputIconComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AlertComponent,
    CongregationComponent,
    RadioComponent
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
