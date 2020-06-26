
import { Component, Input, forwardRef, AfterViewInit, HostListener, OnChanges, ViewEncapsulation, ViewChild, ElementRef, OnInit, EventEmitter, Output, Renderer2 } from '@angular/core';

import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, DefaultValueAccessor, Validators, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'congr-input-icon',
  templateUrl: './input-icon.component.html',
  styleUrls: ['./input-icon.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputIconComponent),
    multi: true
  }
  ],
})
//   ,
// {
//   provide: NG_VALIDATORS,
//   useExisting: forwardRef(() => InputIconComponent),
//   multi: true,
// }
export class InputIconComponent implements ControlValueAccessor, AfterViewInit {
  private parseError: boolean;
  private val: any;
  private showPass = false;

  @Input() ruleType: String;
  @Input() label: String;
  @Input() formControlName: String;
  @Input() controlType: String;
  @Input() icon: String
  @Input() placeholder: String
  @Input() options: [];
  @Input() control: FormControl;
  @Input() parent: any;
  @Input() errors: ValidationErrors;
  @Input() pristine: boolean;

  @ViewChild(DefaultValueAccessor) valueAccessor: DefaultValueAccessor;
  @Input() c: FormControl = new FormControl();



  set value(obj) {
    this.val = obj
  }

  delegatedMethodCalls = new ReplaySubject<(_: ControlValueAccessor) => void>();

  constructor(private _renderer: Renderer2, private _elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.delegatedMethodCalls.subscribe(fn => fn(this.valueAccessor));
  }

  registerOnChange(fn: (_: any) => void): void {
    this.delegatedMethodCalls.next(valueAccessor => {
      if (valueAccessor)
        valueAccessor.registerOnChange(fn)
    });
  }
  registerOnTouched(fn: () => void): void {
    this.delegatedMethodCalls.next(valueAccessor => {
      if (valueAccessor)
        valueAccessor.registerOnTouched(fn)
    });
  }

  setDisabledState(isDisabled: boolean): void {
    this.delegatedMethodCalls.next(valueAccessor => valueAccessor.setDisabledState(isDisabled));
  }

  writeValue(obj: any): void {
    this.delegatedMethodCalls.next(valueAccessor => {
      if (valueAccessor) {
        valueAccessor.writeValue(obj)
        this.value = obj;
      }
    });
  }


}