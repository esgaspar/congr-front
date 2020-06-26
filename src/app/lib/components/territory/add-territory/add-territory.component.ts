import { MenuService } from './../../../services/menu.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TerritoryService } from '../../../services/territory.service';
import { Observable } from 'rxjs';
import { FormsComponent } from '../../general/forms/forms.component';

@Component({
  selector: 'app-add-territory',
  templateUrl: './add-territory.component.html',
  styleUrls: ['./add-territory.component.scss']
})
export class AddTerritoryComponent extends FormsComponent {

  constructor(public menuService: MenuService,
    public service: TerritoryService,
    private formBuilder: FormBuilder,
  ) {
    super(menuService);
    this.data = this.clearData();
    this.service.updateObs(this.clearData());
  }

  destroy(...args: any[]): void {
  }

  init(...args: any[]): void {
    this.subscribes.data = new Observable<any>();
    this.data = this.clearData();
    this.form = this.formBuilder.group({
      code: ['', [Validators.required]],
      territoryName: ['', Validators.required],
    });
    this.createForm();
  }

  save() {
    this.data = this.clearData();
    this.service.updateObs(this.clearData());
    this.form.reset(this.clearForm())
  }

  createForm() {

    this.subscribes.data = this.service.territory.subscribe(data => {
      if (data && data._id) {
        this.data = data;
        this.f['code'].setValue(data.code);
        this.f['territoryName'].setValue(data.territoryName);
      } else {
        this.clearForm();
      }
    });
  };

  clearForm() {
    this.f['code'].setValue('');
    this.f['territoryName'].setValue('');
  }
  async add() {
    if (this.isSave) {
      return
    }

    if (!this.form.valid) {
      console.log("formulário invalido")
      return
    }

    this.data.code = this.f.code.value;
    this.data.territoryName = this.f.territoryName.value;


    if (this.data._id) {
      this.subscribes.edit = (await (this.service.update(this.data))).subscribe((reponse) => {
      });
    } else {
      this.subscribes.add = (await this.service.add(this.data)).subscribe((reponse) => {
        this.service.territoryList.unshift(reponse);
        this.data = reponse;
        this.service.updateObs(reponse);

      });
    }
  }
  clearData(): any {
    return { _id: null, code: '', territoryName: '' };
  }
  get isSave() {
    let status =
      this.data.code === this.f.code.value &&
      this.data.territoryName === this.f.territoryName.value && this.form.valid;

    this.updatestatusSave(status);

    return status;
  }

}
