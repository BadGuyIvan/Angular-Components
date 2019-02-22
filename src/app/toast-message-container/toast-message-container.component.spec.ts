import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMessageContainerComponent } from './toast-message-container.component';

describe('ToastMessageContainerComponent', () => {
  let component: ToastMessageContainerComponent;
  let fixture: ComponentFixture<ToastMessageContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastMessageContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMessageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
