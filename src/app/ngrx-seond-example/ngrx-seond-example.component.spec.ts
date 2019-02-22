import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxSeondExampleComponent } from './ngrx-seond-example.component';

describe('NgrxSeondExampleComponent', () => {
  let component: NgrxSeondExampleComponent;
  let fixture: ComponentFixture<NgrxSeondExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxSeondExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxSeondExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
