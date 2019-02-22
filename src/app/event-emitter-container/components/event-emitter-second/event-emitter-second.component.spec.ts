import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterSecondComponent } from './event-emitter-second.component';

describe('EventEmitterSecondComponent', () => {
  let component: EventEmitterSecondComponent;
  let fixture: ComponentFixture<EventEmitterSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
