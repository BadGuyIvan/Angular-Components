import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventEmitterFirstComponent } from './event-emitter-first.component';

describe('EventEmitterFirstComponent', () => {
  let component: EventEmitterFirstComponent;
  let fixture: ComponentFixture<EventEmitterFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventEmitterFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmitterFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
