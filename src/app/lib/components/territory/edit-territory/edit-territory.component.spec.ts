import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTerritoryComponent } from './edit-territory.component';

describe('EditTerritoryComponent', () => {
  let component: EditTerritoryComponent;
  let fixture: ComponentFixture<EditTerritoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTerritoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
