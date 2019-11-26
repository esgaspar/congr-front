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
  private lat: number;
  private long: number;

  constructor(public contactService: ContactService) { }

  getPosition = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;
    });
  }


  async ngOnInit() {

    await this.getPosition();

  }

}
