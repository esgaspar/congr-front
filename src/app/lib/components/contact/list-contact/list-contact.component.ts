import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit, OnDestroy {
  service;
  contacts;

  public subscribes = { contact: null, list: null, delete: null };

  constructor(private contactService: ContactService) {
    this.service = contactService;
  }

  ngOnDestroy(): void {
    // this.subscribes.delete.unsubscribe();
    // this.subscribes.list.unsubscribe();
    // this.subscribes.contact.unsubscribe();
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
    });
  }

  public delete(id, index) {
    this.subscribes.delete = this.service.delete(id).subscribe((reponse) => {
      this.service.contactList.splice(index, 1);
    });
  }

  public contactEdit(value, index) {
    this.service.updateContact(value);
  }
}
