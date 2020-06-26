import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './lib/components/contact/contact.component';
import { ListContactComponent } from './lib/components/contact/list-contact/list-contact.component';
import { RemoveContactComponent } from './lib/components/contact/remove-contact/remove-contact.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './lib/components/ui/alert/alert.component';
import { InputIconComponent } from './lib/components/ui/input-icon/input-icon.component';
import { RadioComponent } from './lib/components/ui/radio/radio.component';
import { CongregationComponent } from './lib/components/congregation/congregation.component';
import { AddContactComponent } from './lib/components/contact/add-contact/add-contact.component';
import { EditContactComponent } from './lib/components/contact/edit-contact/edit-contact.component';
import { DashboardComponent } from './lib/components/dashboard.component';
import { LoginComponent } from './lib/components/login/login.component';
import { AddMeetingComponent } from './lib/components/meeting/add-meeting/add-meeting.component';
import { EditMeetingComponent } from './lib/components/meeting/edit-meeting/edit-meeting.component';
import { ListMeetingComponent } from './lib/components/meeting/list-meeting/list-meeting.component';
import { MeetingComponent } from './lib/components/meeting/meeting.component';
import { RemoveMeetingComponent } from './lib/components/meeting/remove-meeting/remove-meeting.component';
import { MenuHeaderComponent } from './lib/components/menu-header/menu-header.component';
import { RegisterComponent } from './lib/components/register/register.component';
import { AddTerritoryComponent } from './lib/components/territory/add-territory/add-territory.component';
import { EditTerritoryComponent } from './lib/components/territory/edit-territory/edit-territory.component';
import { ListTerritoryComponent } from './lib/components/territory/list-territory/list-territory.component';
import { RemoveTerritoryComponent } from './lib/components/territory/remove-territory/remove-territory.component';
import { TerritoryComponent } from './lib/components/territory/territory.component';
import { AddUserComponent } from './lib/components/user/add-user/add-user.component';
import { EditUserComponent } from './lib/components/user/edit-user/edit-user.component';
import { ListUserComponent } from './lib/components/user/list-user/list-user.component';
import { RemoveUserComponent } from './lib/components/user/remove-user/remove-user.component';
import { UserComponent } from './lib/components/user/user.component';
import { SelectComponent } from './lib/components/ui/select/select/select.component';
import { FormsComponent } from './lib/components/general/forms/forms.component';
import { ListComponent } from './lib/components/ui/list/list.component';

@NgModule({
  declarations: [
    AppComponent,

    AddUserComponent,
    EditUserComponent,
    RemoveUserComponent,
    ListUserComponent,

    AddContactComponent,
    EditContactComponent,
    RemoveContactComponent,
    ListContactComponent,

    AddTerritoryComponent,
    EditTerritoryComponent,
    RemoveTerritoryComponent,
    ListTerritoryComponent,

    AddMeetingComponent,
    EditMeetingComponent,
    RemoveMeetingComponent,
    ListMeetingComponent,

    MenuHeaderComponent,
    UserComponent,
    ContactComponent,
    MeetingComponent,
    TerritoryComponent,
    InputIconComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AlertComponent,
    CongregationComponent,
    RadioComponent,
    SelectComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
