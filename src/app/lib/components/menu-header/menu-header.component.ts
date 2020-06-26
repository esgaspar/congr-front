import { MenuService } from './../../services/menu.service';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit, OnDestroy {
  navbarOpen = false;
  public isActive: any = false;
  @Output() responseMenu = new EventEmitter();
  
  public saveStatusIcon: any = false;
  
  private currentUserSub;
  private saveStatusSub;
  
  constructor(private router: Router,
    private menuService: MenuService,
    private authService: AuthenticationService,) {

    this.currentUserSub = this.authService.currentUser.subscribe(user => {
      this.isActive = user && user.status && user.status.situation === "Ativo";
    })
  }



  ngOnDestroy(): void {
    this.currentUserSub.unsubscribe();
    this.saveStatusSub.unsubscribe();
  }


  menu(value) {
    this.responseMenu.emit(value);

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  ngOnInit() {

    this.saveStatusSub = this.menuService.saveStatus.subscribe(data => {
      if (data === 'saved') {
        this.saveStatusIcon = "fas fa-cloud";
      } else if (data === 'saving') {
        this.saveStatusIcon = 'fas fa-cloud-upload-alt';
      }
      else {
        this.saveStatusIcon = false;

      }

    });
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
