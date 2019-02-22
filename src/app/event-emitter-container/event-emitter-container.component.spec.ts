import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterContainerComponent } from './event-emitter-container.component';

describe('EventEmitterContainerComponent', () => {
  let component: EventEmitterContainerComponent;
  let fixture: ComponentFixture<EventEmitterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
