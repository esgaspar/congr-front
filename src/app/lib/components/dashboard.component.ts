import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() menuValue: any;
  contactEdit: any;


  constructor(private router: Router,
    private authenticationService: AuthenticationService) { }

  menuMethodParent($event) {
    this.menuValue = $event;
    console.log('menu', this.menuValue);
  }

  contactUpdate($event) {
    this.contactEdit = $event;
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() { }
}
