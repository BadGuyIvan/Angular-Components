import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-emitter-first',
  templateUrl: './event-emitter-first.component.html',
  styleUrls: ['./event-emitter-first.component.css']
})
export class EventEmitterFirstComponent implements OnInit {

  constructor() { }

  displayCounter(count) {
    console.log(count);
  }

  ngOnInit() {
  }

}
