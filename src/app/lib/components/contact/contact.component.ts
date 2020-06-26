import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


import { ContactService } from '../../services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {

  @Input() menuValue: any;
  params: any;
  opened: boolean;


  constructor(public contactService: ContactService) { }



  async ngOnInit() {

  }

}
