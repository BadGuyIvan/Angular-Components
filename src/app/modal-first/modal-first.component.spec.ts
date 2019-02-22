import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFirstComponent } from './modal-first.component';

describe('ModalFirstComponent', () => {
  let component: ModalFirstComponent;
  let fixture: ComponentFixture<ModalFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
