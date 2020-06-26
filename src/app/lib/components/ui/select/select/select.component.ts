import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'congr-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor() { }

  @Input() inputModel: any;
  @Input() type: string;
  @Input() icon: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() options = [] as any;
  @Input() filterBy: String;
  public optionsFilter: any;


  @Output() inputModelChange = new EventEmitter<any>();


  ngOnInit() {
    this.optionsFilter = this.options;
  }

  change(option) {
    // this.inputModel = option;
    this.inputModelChange.emit(this.inputModel);
  }

  search($ev) {

    let val = $ev.target.value;

    if (!val) {
      this.optionsFilter = [];
      return;
    }

    if (val.length <= 2) {
      this.optionsFilter = this.options.split(",");
      return this.optionsFilter;
    }

    this.optionsFilter = this.options.split(",")
      .filter(function (option) {
        return option.toUpperCase().includes(val.toUpperCase()) || option.toUpperCase().includes(val.toUpperCase());
      });
  }

}  