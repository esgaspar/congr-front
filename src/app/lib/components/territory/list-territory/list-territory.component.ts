import { ListComponent } from './../../ui/list/list.component';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { TerritoryService } from '../../../services/territory.service';

@Component({
  selector: 'app-list-territory',
  templateUrl: './list-territory.component.html',
  styleUrls: ['./list-territory.component.scss', './../../ui/list/list.common.scss']
})
export class ListTerritoryComponent extends ListComponent {
  service;
  territorys;
  public showTable = true;
  public territoryToFind;
  public territoryListFilter;

  public subscribes = { territory: null, list: null, delete: null };

  constructor(private territoryService: TerritoryService) {
    super();
    this.service = territoryService;
  }

  onDestroy(): void {
    console.log("Método onDestroy não implementado")
  }

  onInit() {
    this.list();

    this.subscribes.territory = this.service.territory.subscribe(data => {
      // use os dados aqui
    });
  }

  public list() {
    this.subscribes.list = this.service.list().subscribe((data: any) => {
      this.service.territoryList = data;
      this.territoryListFilter = data;
    });
  }

  public delete(id, index) {
    this.subscribes.delete = this.service.delete(id).subscribe((reponse) => {
      this.territoryListFilter.splice(index, 1);
    });
  }

  public territoryEdit(value, index) {
    this.service.updateObs(value);
  }

  public activeEdit(value) {
    value.status.situation = value.status.situation === 'Ativo' ? 'Inativo' : 'Ativo';
    this.service.updateTerritory(value);
  }

  public isInactive(territory) {
    return territory.status && territory.status.situation !== 'Ativo';
  }

  public cleanFilter() {
    this.territoryListFilter = this.service.territoryList;
  }

  public async findTerritory($ev) {
    let val = $ev.target.value;

    if (!val) {
      this.territoryListFilter = this.service.territoryList;
      return;
    }
    if (val.length <= 2) {
      this.territoryListFilter = this.service.territoryList;
      return;
    }
    let res = await this.service.territoryList
      .filter(function (territory) {
        return territory.code.toLowerCase().includes(val.toLowerCase()) || territory.territoryName.toLowerCase().includes(val.toLowerCase());
      });

    this.territoryListFilter = res.length > 0 ? res : this.service.territoryList;
  }

  // public async findTerritory($ev) {
  //   let val = $ev.target.value;

  //   if (!val) {
  //     this.territoryListFilter = this.service.territoryList;
  //     return;
  //   }
  //   if (val.length <= 2) {
  //     this.territoryListFilter = this.service.territoryList;
  //     return;
  //   }
  //   this.territoryListFilter = await this.service.territoryList
  //     .filter(function (territory) {
  //       return territory.firstName.includes(val) || territory.lastName.includes(val);
  //     });
  // }

  get getShowTable() {
    this.showTable = !this.showTable;
    if (this.showTable) {
      this.cleanFilter();
    }
    return this.showTable;
  }
}
