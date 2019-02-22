import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveMainComponent } from './directive-main.component';

describe('DirectiveMainComponent', () => {
  let component: DirectiveMainComponent;
  let fixture: ComponentFixture<DirectiveMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
