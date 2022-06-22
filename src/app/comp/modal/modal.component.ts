import { Component, ElementRef, OnInit } from '@angular/core';
import { Modalable } from './modalable';

declare const $:any;

@Component({
  selector: 'app-modal',
  template: `
    <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        
        <div class="modal-header">
          <ng-content select="[modal-title]"></ng-content>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <ng-content select="[modal-body]"></ng-content>
        <ng-content select="[modal-footer]"></ng-content>
        
      </div>
    </div>
  </div>
  `,
  styles: [
  ]
})

export class ModalComponent extends Modalable implements OnInit {

  constructor(private element: ElementRef) {
    super();
   }

  ngOnInit(): void {
  }

  // override show(){
  //   const divModal = this.getDivModal();
  //   $(divModal).modal('show');
  // }

  // override hide(){
  //   const divModal = this.getDivModal();
  //   $(divModal).modal('hide');
  // }

  getDivModal(): HTMLElement {
    const el: HTMLElement = this.element.nativeElement;
    return el.firstChild as HTMLElement;
  }

}
