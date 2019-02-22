import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMessageFirstComponent } from './toast-message-first.component';

describe('ToastMessageFirstComponent', () => {
  let component: ToastMessageFirstComponent;
  let fixture: ComponentFixture<ToastMessageFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastMessageFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMessageFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
