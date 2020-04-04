import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() menuValue: any;
  userEdit: any;


  constructor(private router: Router,
    private authService: AuthenticationService) { }

  menuMethodParent($event) {

    this.menuValue = $event;
    console.log('menu', this.menuValue);
  }

  userUpdate($event) {
    this.userEdit = $event;
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnInit() {
    console.log('Ambiente ', environment)
  }
}
