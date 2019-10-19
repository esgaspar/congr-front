import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'congr-input-icon',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.scss']
})
export class InputIconComponent implements OnInit {  
  
  constructor() {}
  
  @Input() inputModel: string;  
  @Input() type: string;
  @Input() icon: string;
  @Input() id: string;
  @Input() placeholder: string;
  
  @Output() inputModelChange = new EventEmitter<string>();  
  
    
  ngOnInit() {  
  }  
  
  change(){  
    this.inputModelChange.emit(this.inputModel);  
  }  
  
}  