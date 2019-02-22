import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

@Directive({
  selector: '[appModalOpen]'
})
export class ModalOpenDirective implements OnInit, OnDestroy {
  element: HTMLBaseElement;

  ngOnDestroy() {
    this.element.removeEventListener('click', this.clickHandler);
  }

  ngOnInit(): void {
    this.modalService.close$.subscribe(() => this.viewContainer.clear());
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private modalService: ModalService
  ) { }

    @Input()
      set appModalOpen(el: HTMLBaseElement) {
        this.element = el;
        el.addEventListener('click', this.clickHandler);
      }

    clickHandler = () => {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
}
