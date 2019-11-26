import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  navbarOpen = false;

  constructor(private router: Router,
    private contactService: ContactService) { }

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
    this.contactService.logout();
    this.router.navigate(['/login']);
  }
}
