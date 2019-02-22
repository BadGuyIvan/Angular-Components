import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterFirtsChildComponent } from './event-emitter-firts-child.component';

describe('EventEmitterFirtsChildComponent', () => {
  let component: EventEmitterFirtsChildComponent;
  let fixture: ComponentFixture<EventEmitterFirtsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterFirtsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterFirtsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
