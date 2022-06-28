import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'modal-title',
  template: `
        <div class="modal-header">
          <ng-content></ng-content>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
  `,
  styles: []
})
export class ModalTitleComponent implements OnInit {

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    const el: HTMLElement = this.element.nativeElement;
    const firstChild =  el.firstChild?.firstChild;
    (<any>firstChild).classList.add('modal-title');
  }

}
