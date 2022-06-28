import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalContentDirective } from './../modal-content.directive';

declare const $: any;

@Component({
  selector: 'app-modal-dynamic',
  template: `
    <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <ng-template modalContent></ng-template>

        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ModalDynamicComponent implements OnInit {

  @ViewChild(ModalContentDirective) modalContentDirective!: ModalContentDirective;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
  }

  mount(modalImplementedComponent: any){
    const modalContent = this.modalContentDirective.viewContainerRef;
    modalContent.clear();
    modalContent.createComponent<any>(modalImplementedComponent);
  }

  show(){
    // const divModal = this.getDivModal();
    $(this.getDivModal).modal('show');
  }

  hide(){
    // const divModal = this.getDivModal();
    $(this.getDivModal).modal('hide');
  }

  get getDivModal(): HTMLElement {
    const el: HTMLElement = this.element.nativeElement;
    return el.firstChild as HTMLElement;
  }
}
