import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTerritoryComponent } from './remove-territory.component';

describe('RemoveTerritoryComponent', () => {
  let component: RemoveTerritoryComponent;
  let fixture: ComponentFixture<RemoveTerritoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTerritoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTerritoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
