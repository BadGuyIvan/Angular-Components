import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-au-fa-input',
  templateUrl: './au-fa-input.component.html',
  styleUrls: ['./au-fa-input.component.css']
})
export class AuFaInputComponent implements OnInit {

  @Input()
  icon: string;

  constructor() { }

  ngOnInit() {
  }

}
