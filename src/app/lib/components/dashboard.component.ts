import { AlertService } from './../services/alert.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { environment } from 'src/environments/environment';
import { ClipboardService } from 'ngx-clipboard'


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent {
  @Input() menuValue: any;
  userEdit: any;
  public isActive: boolean;
  public user;


  constructor(private router: Router,
    private authService: AuthenticationService, public alertService: AlertService, private clipboardService: ClipboardService) {
    this.authService.currentUser.subscribe(user => {
      this.isActive = user && user.status && user.status.situation === "Ativo";
      this.user = user;
      if (!this.isActive) {
        this.alertService.success("Seu usuario ainda não está ativo, por favor informe seu id para o responsavel.");

      }
    })
  }

  menuMethodParent($event) {

    this.menuValue = $event;
  }

  userUpdate($event) {
    this.userEdit = $event;
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  copyId() {
    if (this.user) {
      this.clipboardService.copy(this.user._id);
      this.alertService.success("Copiado com sucesso");
    }
  }

}
