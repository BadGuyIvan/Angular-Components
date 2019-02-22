import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-event-emitter-firts-child',
  templateUrl: './event-emitter-firts-child.component.html',
  styleUrls: ['./event-emitter-firts-child.component.css']
})
export class EventEmitterFirtsChildComponent {

  @Output() valueChange = new EventEmitter();
  counter = 0;

  valueChanged() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }

}
