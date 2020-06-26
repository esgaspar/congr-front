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
  opened: boolean;


  constructor(public userService: UserService) { }



  async ngOnInit() {

  }

}
