import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTerritoryComponent } from './add-territory.component';

describe('AddTerritoryComponent', () => {
  let component: AddTerritoryComponent;
  let fixture: ComponentFixture<AddTerritoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTerritoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
