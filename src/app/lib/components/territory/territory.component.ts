import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


import { TerritoryService } from '../../services/territory.service';


@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TerritoryComponent implements OnInit {

  @Input() menuValue: any;
  params: any;
  opened: boolean;


  constructor(public territoryService: TerritoryService) { }



  async ngOnInit() {

  }

}
