import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {
  addForm;
  user = this.userClear();
  public subscribes = { add: null, edit: null, user: null };
  public statusOptions = [{ situation: 'Ativo', active: true, date: Date.now }, { situation: 'Inativo', active: false, date: Date.now }];


  constructor(public service: UserService, private formBuilder: FormBuilder,
  ) {
    this.user = this.userClear();
    this.createForm();
  }

  ngOnDestroy(): void {
    // this.subscribes.add.unsubscribe();
    // this.subscribes.add.unsubscribe();
    // this.subscribes.user.unsubscribe();
  }

  ngOnInit(): void {
    this.subscribes.user = new Observable<any>();
  }

  public userClear() {
    return { _id: null, firstName: '', lastName: '', sexGender: '', username: '', password: '', status: { situation: '', active: false, 'date': Date.now } };
  }

  createForm() {

    this.subscribes.user = this.service.user.subscribe(data => {
      console.log("subscribe user", data);
      if (data && data._id) {
        this.user = data;
        this.addForm = {
          lastName: data.lastName,
          firstName: data.firstName,
          username: data.username,
          password: data.password,
          status: data.status
        };
      } else {
        this.addForm ={
          lastName: '',
          firstName: '',
          username: '',
          password: '',
          status: {},
      }
    }});
  };

 async add(user) {
    this.user.firstName = user.firstName;
    this.user.lastName = user.lastName;
    this.user.username = user.username;
    this.user.password = user.password;
    this.user.status = user.status;

    if (!this.user.status){
        this.user.status = this.statusOptions[1];
    }

    if (this.user.sexGender === '') {
      this.user.sexGender = 'M';
    }
    if (this.user.status && this.user.status.situation === '') {
      this.user.status.situation = 'Inativo';
    }

    if (this.user._id) {
      this.subscribes.edit = (await (this.service.update(this.user))).subscribe((reponse) => {
      });
    } else {
      this.subscribes.add = (await this.service.add(this.user)).subscribe((reponse) => {
        this.service.userList.unshift(reponse);
      });
    }
    this.user = this.userClear();
    this.service.updateUser(this.userClear());
  }

}
