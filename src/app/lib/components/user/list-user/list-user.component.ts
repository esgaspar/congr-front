import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit, OnDestroy {
  service;
  users;

  public subscribes = { user: null, list: null, delete: null };

  constructor(private userService: UserService) {
    this.service = userService;
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.list();

    this.subscribes.user = this.service.user.subscribe(data => {
      // use os dados aqui
    });
  }

  public list() {
    this.subscribes.list = this.service.list().subscribe((data: any) => {
      this.service.userList = data;
    });
  }

  public delete(id, index) {
    this.subscribes.delete = this.service.delete(id).subscribe((reponse) => {
      this.service.userList.splice(index, 1);
    });
  }

  public userEdit(value, index) {
    this.service.updateUser(value);
    // this.list();
  }

  public isInactive(user){
    return user.status && user.status.situation !== 'Ativo';
  }
}
