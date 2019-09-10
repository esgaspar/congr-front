import { Component, OnInit } from '@angular/core';

import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  contacts;
  service;

  constructor(private contactService: ContactService) {
    this.service = contactService;
  }

  ngOnInit() {
    this.list();
  }
  
  public list() {
    this.service.list().subscribe((data: any) => {
      console.log(data);
      this.contacts = data;
    });
  }

}
