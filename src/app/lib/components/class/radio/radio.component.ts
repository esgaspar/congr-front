import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'congr-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

  constructor() { }

  @Input() inputModel: any;
  @Input() type: string;
  @Input() icon: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() options : []

  @Output() inputModelChange = new EventEmitter<any>();


  ngOnInit() {
    this.inputModel = !!this.inputModel.situation ? this.inputModel.situation : {situation : "Inativo", active: false, 'date': new Date().getDate()};
  }

  change(option) {
    // this.inputModel = option;
    this.inputModelChange.emit(this.inputModel);
  }

}  