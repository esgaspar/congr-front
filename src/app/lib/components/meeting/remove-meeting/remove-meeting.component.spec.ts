import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMeetingComponent } from './remove-meeting.component';

describe('RemoveMeetingComponent', () => {
  let component: RemoveMeetingComponent;
  let fixture: ComponentFixture<RemoveMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
