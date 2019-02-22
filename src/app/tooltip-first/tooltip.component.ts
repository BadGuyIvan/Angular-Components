import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

@Component({
  template: `
    <div class="tooltip-container" #container [ngStyle]="{top: top}">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
      `
      .tooltip-container {
        background-color: black;
        color: #fff;
        display: inline-block;
        padding: 0.5em;
        position: absolute;
      }
    `
  ]
})
export class TooltipComponent implements OnInit {
  top : string;
  @ViewChild("container", { read: ElementRef }) private tooltipContainer;

  constructor( @Inject('tooltipConfig') private config ) {
  }

  ngOnInit() {
    const {top} = this.config.host.getBoundingClientRect();
    const {height} = this.tooltipContainer.nativeElement.getBoundingClientRect();
    console.log(`top ${top} height ${height}`)
    this.top = `${(top - height)}px`;
  }

}
