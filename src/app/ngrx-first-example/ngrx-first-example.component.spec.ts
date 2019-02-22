import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxFirstExampleComponent } from './ngrx-first-example.component';

describe('NgrxFirstExampleComponent', () => {
  let component: NgrxFirstExampleComponent;
  let fixture: ComponentFixture<NgrxFirstExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxFirstExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxFirstExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
