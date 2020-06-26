import { MenuService } from './../../../services/menu.service';
import { FormsComponent } from './../../general/forms/forms.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/interval';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent extends FormsComponent {

  public statusOptions = [{ situation: 'Ativo', active: true, date: Date.now }, { situation: 'Inativo', active: false, date: Date.now }];
  public showPass = false;

  constructor(
    public service: UserService,
    private formBuilder: FormBuilder,
    public menuService: MenuService

  ) {
    super(menuService);
    this.data = this.clearData();
    this.service.updateUser(this.clearData());
  }

  destroy(...args: any[]): void {
  }

  init(...args: any[]): void {
    this.subscribes.data = new Observable<any>();
    this.data = this.clearData();
    this.form = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.pattern('[A-Za-z]{1,255}'), Validators.required])],
      lastName: ['', Validators.compose([Validators.pattern('[A-Za-z]{1,255}'), Validators.required])],
      username: ['', Validators.required],
      password: ['', Validators.required],
      status: [{ situation: "Inativo", active: false, 'date': new Date().getDate() }, Validators.required]
    });
    this.createForm();
  }

  save() {
    this.data = this.clearData();
    this.service.updateUser(this.clearData());
    this.form.reset(this.clearForm())
  }
  public clearData() {
    return { _id: null, firstName: '', lastName: '', sexGender: '', username: '', password: '', status: { situation: '', active: false, 'date': Date.now } };
  }

  createForm() {

    this.subscribes.data = this.service.user.subscribe(data => {
      if (data && data._id) {
        this.data = data;
        this.f['lastName'].setValue(data.lastName);
        this.f['firstName'].setValue(data.firstName);
        this.f['username'].setValue(data.username);
        this.f['password'].setValue(data.password);
        this.f['status'].setValue(data.status);
      } else {
        this.clearForm();
      }


    });
  };

  clearForm() {
    this.f['lastName'].setValue('');
    this.f['firstName'].setValue('');
    this.f['username'].setValue('');
    this.f['password'].setValue('');
    this.f['status'].setValue(false);
    return this.form;
  }
  async add() {
    if (!this.form.valid) {
      console.log("formulário invalido")
      return
    }

    if(this.isSave){
      return
    }

    this.data.firstName = this.f.firstName.value;
    this.data.lastName = this.f.lastName.value;
    this.data.username = this.f.username.value;
    this.data.password = this.f.password.value;
    this.data.status = this.f.status.value;

    if (!this.data.status) {
      this.data.status = this.statusOptions[1];
    }

    if (this.data.sexGender === '') {
      this.data.sexGender = 'M';
    }
    if (this.data.status && this.data.status.situation === '') {
      this.data.status.situation = 'Inativo';
    }

    if (this.data._id) {
      this.subscribes.edit = (await (this.service.update(this.data))).subscribe((reponse) => {
      });
    } else {
      this.subscribes.add = (await this.service.add(this.data)).subscribe((reponse) => {
        this.service.userList.unshift(reponse);
        this.data = reponse;
        this.service.updateUser(reponse);
      });
    }
  }

  get isSave() {

    let status = this.data.firstName === this.f.firstName.value &&
      this.data.lastName === this.f.lastName.value &&
      this.data.username === this.f.username.value &&
      this.data.password === this.f.password.value &&
      this.data.status === this.f.status.value;

    this.updatestatusSave(status)

    return status;
  }

}
