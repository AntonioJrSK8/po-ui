import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'modal-footer',
  template: '<ng-content></ng-content>',
  styles: []
})
export class ModalFooterComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const el: HTMLElement = this.element.nativeElement;
    const firstChild =  el.firstChild;
    (<any>firstChild).classList.add('modal-footer');
  }

}
