import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveFirst]'
})
export class DirectiveFirstDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter')
  mouseenter(){
    this.elementRef.nativeElement.style.fontWeight = 'bold'
  }

  @HostListener('mouseout')
  mouseout() {
    this.elementRef.nativeElement.style.fontWeight = 'normal'
  }

}
