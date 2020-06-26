import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveContactComponent } from './remove-contact.component';

describe('RemoveContactComponent', () => {
  let component: RemoveContactComponent;
  let fixture: ComponentFixture<RemoveContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
