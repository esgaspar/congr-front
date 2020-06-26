import { MenuService } from './../../../services/menu.service';
import { TerritoryService } from '../../../services/territory.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';
import { Observable } from 'rxjs';
import { FormsComponent } from '../../general/forms/forms.component';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent extends FormsComponent {
  public statusOptions = [{ situation: 'Ativo', active: true, date: Date.now }, { situation: 'Inativo', active: false, date: Date.now }];
  public territoryListFilter = [] as any;

  constructor(
    public service: ContactService,
    private formBuilder: FormBuilder,
    public menuService: MenuService,
    public territoryService: TerritoryService

  ) {
    super(menuService);
    this.data = this.clearData();
    this.service.updateContact(this.clearData());
  }

  destroy(...args: any[]): void {
  }

  init(...args: any[]): void {
    this.subscribes.data = new Observable<any>();
    this.data = this.clearData();
    this.form = this.formBuilder.group({
      firstName: ['', Validators.compose([Validators.pattern('[A-Za-z]{1,255}'), Validators.required])],
      lastName: ['', Validators.compose([Validators.pattern('[A-Za-z]{1,255}'), Validators.required])],
      contactname: ['', Validators.compose([Validators.pattern('[A-Za-z]{1,255}'), Validators.required])],
      status: [{ situation: "Ativo", active: true, 'date': new Date().getDate() }, Validators.required],
      sexGender: ['M', Validators.compose([Validators.pattern('[MF]{1,1}'), Validators.required])],
      territory: [{}, Validators.required]
    });
    this.createForm();
  }

  save() {
    this.data = this.clearData();
    this.service.updateContact(this.clearData());
    this.form.reset(this.clearForm())
  }

  createForm() {

    this.subscribes.data = this.service.contact.subscribe(data => {
      if (data && data._id) {
        this.data = data;
        this.f['lastName'].setValue(data.lastName);
        this.f['firstName'].setValue(data.firstName);
        this.f['contactname'].setValue(data.contactname);
        this.f['status'].setValue(data.status);
        this.f['territory'].setValue(data.territory);
      } else {
        this.clearForm();
      }
    });
  };


  clearForm() {
    this.f['lastName'].setValue('');
    this.f['firstName'].setValue('');
    this.f['contactname'].setValue('');
    this.f['status'].setValue('');
    this.f['territory'].setValue('');
  }

  async add() {
    if (this.isSave) {
      return
    }

    if (!this.form.valid) {
      console.log("formulário invalido")
      return
    }

    this.data.firstName = this.f.firstName.value;
    this.data.lastName = this.f.lastName.value;
    this.data.contactname = this.f.contactname.value;
    this.data.status = this.f.status.value;

    if (!this.data.status) {
      this.data.status = this.statusOptions[1];
    }

    if (this.data.sexGender === '') {
      this.data.sexGender = 'M';
    }
    if (this.data.status && this.data.status.situation === '') {
      this.data.status.situation = 'Ativo';
    }

    if (this.data._id) {
      this.subscribes.edit = (await (this.service.update(this.data))).subscribe((reponse) => {
      });
    } else {
      this.subscribes.add = (await this.service.add(this.data)).subscribe((reponse) => {
        this.service.contactList.unshift(reponse);
        this.data = reponse;
        this.service.updateContact(reponse);
      });
    }
  }

  clearData(): any {
    return { _id: null, firstName: '', lastName: '', sexGender: '', contactname: '', status: { situation: '', active: false, 'date': Date.now }, territory: '' };
  }

  get isSave(): any {
    let status = this.data.firstName === this.f.firstName.value &&
    this.data.lastName === this.f.lastName.value &&
    this.data.contactname === this.f.contactname.value &&
    this.data.status === this.f.status.value;

    this.updatestatusSave(status)

    return status;
  }



}
