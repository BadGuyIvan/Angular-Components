import { Component, OnInit } from '@angular/core';
import { TooltipComponentComponent } from './tooltip-component-first/tooltip-component/tooltip-component.component';

@Component({
  selector: 'app-tooltip-first',
  templateUrl: './tooltip-first.component.html',
  styleUrls: ['./tooltip-first.component.css']
})
export class TooltipFirstComponent implements OnInit {

  firstComponent  = TooltipComponentComponent

  constructor() { }

  ngOnInit() {
  }

}
