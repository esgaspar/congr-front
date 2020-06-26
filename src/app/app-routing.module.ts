import { NgModule } from "@angular/core";
import { Routes, RouterModule, CanActivate } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";


// tslint:disable-next-line: max-line-length
import { AuthGuard } from './lib/helpers/auth.guard.service';
import { LoginComponent } from './lib/components/login/login.component';
import { RegisterComponent } from './lib/components/register/register.component';
import { DashboardComponent } from './lib/components/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: 'dashboard' }
];
// tslint:disable-next-line: import-spacing
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
    // tslint:disable-next-line: max-line-length
  ],
  exports: [
    RouterModule
    // tslint:disable-next-line: max-line-length
  ]
})
export class AppRoutingModule { }
