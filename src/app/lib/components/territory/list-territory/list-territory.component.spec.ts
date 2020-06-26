import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTerritoryComponent } from './list-territory.component';

describe('ListTerritoryComponent', () => {
  let component: ListTerritoryComponent;
  let fixture: ComponentFixture<ListTerritoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTerritoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
