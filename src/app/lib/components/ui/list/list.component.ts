import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { style, state, animate, transition, trigger, animateChild, query, stagger } from '@angular/animations';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0.904 }),
        state('open', style({
          opacity: 0.904,
        })),
        animate('10s')
      ]),
      transition(':leave', [

        animate('10s', style({ opacity: 0.904 }))
      ])
    ])
  ]

})
export class ListComponent implements OnInit, OnDestroy {
  public showTable = true;
  @Output() search = new EventEmitter();


  constructor() { }
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.onInit();
  }

  find($event){
    this.search.emit($event);
  }

  get getShowTable() {
    this.showTable = !this.showTable;
    if (this.showTable) {
      this.cleanFilter();
    }
    return this.showTable;
  }


  public cleanFilter(): void { };
  public onInit(): void { };
  public onDestroy(): void { };

}

