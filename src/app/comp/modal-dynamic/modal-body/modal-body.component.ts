import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'modal-body',
  template: '<ng-content></ng-content>',
  styleUrls: ['./modal-body.component.scss']
})
export class ModalBodyComponent implements OnInit {
  
  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const el: HTMLElement = this.element.nativeElement;
    const firstChild =  el.firstChild;
    (<any>firstChild).classList.add('modal-body');
  }

}
