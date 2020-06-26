import { Observable } from 'rxjs';
import { MenuService } from './../../../services/menu.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export abstract class FormsComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public value: any;

  public subscribes = { add: null, edit: null, data: null };

  constructor(public menuService: MenuService) {
    // this.data = this.clearData();

  }

  private saveInterval: any;
  private saveIntervalMilis: number = 2500;

  get data() {
    return this.value;
  }

  set data(val) {
    this.value = val;
  }

  ngOnDestroy(): void {
    this.subscribes.data.unsubscribe();

    if (this.subscribes.edit)
      this.subscribes.edit.unsubscribe();
    if (this.subscribes.add)
      this.subscribes.add.unsubscribe();

    this.saveInterval.unsubscribe();

    this.menuService.updateSaveStatus(false);

    this.destroy();
  }
  ngOnInit(): void {

    this.saveInterval = Observable.interval(this.saveIntervalMilis)
      .subscribe((val) => {
        this.add()

      });

    this.menuService.updateSaveStatus(false);
    this.init();
  }

  updatestatusSave(status) {
    let saveStatus: any = false;
    if (status) {
      saveStatus = 'saved';
    } else if (this.form.valid) {
      saveStatus = 'saving';
    }
    this.menuService.updateSaveStatus(saveStatus);


  }

  get f() { return this.form.controls; }

  abstract destroy(...args): void;

  abstract init(...args): void;

  // public clearData() {
  //   throw new Error("Method not implemented.");
  // };

  abstract createForm();
  abstract async add(...args);

  abstract save();
  abstract clearForm();
  abstract get isSave();

}
