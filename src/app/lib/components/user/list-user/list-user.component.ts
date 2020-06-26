import { ListComponent } from './../../ui/list/list.component';
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
  public showTable = true;
  public userToFind;
  public userListFilter;

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
      this.userListFilter = data;
    });
  }

  public delete(id, index) {
    this.subscribes.delete = this.service.delete(id).subscribe((reponse) => {
      this.userListFilter.splice(index, 1);
    });
  }

  public userEdit(value, index) {
    this.service.updateUser(value);
    // this.list();
  }

  public async activeEdit(value) {
    value.status.situation = value.status.situation === 'Ativo' ? 'Inativo' : 'Ativo';
    this.service.updateUser(value);
    this.service.update(value);

    (await (this.service.update(value))).subscribe((reponse) => {
    });

  }

  public isInactive(user) {
    return user.status && user.status.situation !== 'Ativo';
  }

  public cleanFilter() {
    this.userListFilter = this.service.userList;
  }

  public async findUser($ev) {
    let val = $ev.target.value;

    if (!val) {
      this.userListFilter = this.service.userList;
      return;
    }
    if (val.length <= 2) {
      this.userListFilter = this.service.userList;
      return;
    }
    let res = await this.service.userList
      .filter(function (user) {
        return user.firstName.toLowerCase().includes(val.toLowerCase()) || user.lastName.toLowerCase().includes(val.toLowerCase());
      });

    this.userListFilter = res.length > 0 ? res : this.service.userList;
  }

  get getShowTable() {
    this.showTable = !this.showTable;
    if (this.showTable) {
      this.cleanFilter();
    }
    return this.showTable;
  }
}
