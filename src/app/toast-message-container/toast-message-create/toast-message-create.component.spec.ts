import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMessageCreateComponent } from './toast-message-create.component';

describe('ToastMessageCreateComponent', () => {
  let component: ToastMessageCreateComponent;
  let fixture: ComponentFixture<ToastMessageCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastMessageCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMessageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
