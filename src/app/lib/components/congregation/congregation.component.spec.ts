import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongregationComponent } from './congregation.component';

describe('CongregationComponent', () => {
  let component: CongregationComponent;
  let fixture: ComponentFixture<CongregationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongregationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongregationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
