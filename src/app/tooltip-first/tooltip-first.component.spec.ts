import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipFirstComponent } from './tooltip-first.component';

describe('TooltipFirstComponent', () => {
  let component: TooltipFirstComponent;
  let fixture: ComponentFixture<TooltipFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
