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
    const { top } = this.config.host.getBoundingClientRect();
    const _height = this.config.host.getBoundingClientRect().height;
    console.log(_height)
    const { height } = this.tooltipContainer.nativeElement.getBoundingClientRect();
    this.top = `${top-height-_height*2-20}px`;
  }

}
