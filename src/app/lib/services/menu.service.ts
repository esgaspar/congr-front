import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public saveStatusSubject: BehaviorSubject<any>;
  public saveStatus: Observable<any>;

  constructor() {
    this.saveStatusSubject = new BehaviorSubject<any>(false);
    this.saveStatus = this.saveStatusSubject.asObservable();
  }

  public get saveStatusValue(): any {
    return this.saveStatusSubject.value;
  }

  async updateSaveStatus(status: any) {
    this.saveStatusSubject.next(status);
  }

}
