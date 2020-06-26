import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ContactService } from '../../../services/contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit, OnDestroy {
  service;
  contacts;
  public showTable = true;
  public contactToFind;
  public contactListFilter;

  public subscribes = { contact: null, list: null, delete: null };

  constructor(private contactService: ContactService) {
    this.service = contactService;
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.list();

    this.subscribes.contact = this.service.contact.subscribe(data => {
      // use os dados aqui
    });
  }

  public list() {
    this.subscribes.list = this.service.list().subscribe((data: any) => {
      this.service.contactList = data;
      this.contactListFilter = data;
    });
  }

  public delete(id, index) {
    this.subscribes.delete = this.service.delete(id).subscribe((reponse) => {
      this.contactListFilter.splice(index, 1);
    });
  }

  public contactEdit(value, index) {
    this.service.updateContact(value);
    // this.list();
  }
  
  public activeEdit(value){
    value.status.situation = value.status.situation === 'Ativo' ? 'Inativo' : 'Ativo';
    this.service.updateContact(value);
  }

  public isInactive(contact) {
    return contact.status && contact.status.situation !== 'Ativo';
  }

  public cleanFilter() {
    this.contactListFilter = this.service.contactList;
  }

  public async findContact($ev) {
    let val = $ev.target.value;

    if (!val) {
      this.contactListFilter = this.service.contactList;
      return;
    }
    if (val.length <= 2) {
      this.contactListFilter = this.service.contactList;
      return;
    }
    this.contactListFilter = await this.service.contactList
      .filter(function (contact) {
        return contact.firstName.includes(val) || contact.lastName.includes(val);
      });
  }

  get getShowTable() {
    this.showTable = !this.showTable;
    if (this.showTable) {
      this.cleanFilter();
    }
    return this.showTable;
  }
}
