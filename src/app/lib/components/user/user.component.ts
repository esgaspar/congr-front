import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  @Input() menuValue: any;
  params: any;
  private lat: number;
  private long: number;

  constructor(public userService: UserService) { }

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
