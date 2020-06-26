import { Component, HostBinding, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AuthenticationService } from './lib/services/authentication.service';
import { Router } from '@angular/router';
import { User } from './lib/model/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'congr-front';
  @HostBinding('class') componentCssClass;
  userEdit: any;
  menuValue: any;
  currentUser: User;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) {

  }

}
