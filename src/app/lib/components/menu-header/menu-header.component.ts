import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  navbarOpen = false;

  constructor(private router: Router,
    private userService: UserService) { }

  @Output() responseMenu = new EventEmitter();

  menu(value) {
    this.responseMenu.emit(value);

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {
  }


  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
