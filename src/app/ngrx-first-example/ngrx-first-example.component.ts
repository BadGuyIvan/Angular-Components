import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface NgrxFirstExampleComponentState {
  message: string;
}

@Component({
  selector: 'app-ngrx-first-example',
  templateUrl: './ngrx-first-example.component.html',
  styleUrls: ['./ngrx-first-example.component.css']
})
export class NgrxFirstExampleComponent implements OnInit {

  message$: Observable<string>;

  constructor(private store: Store<NgrxFirstExampleComponentState>) {
    this.message$ = this.store.select('message');
  }

  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH'});
  }

  ngOnInit() {
  }

}
