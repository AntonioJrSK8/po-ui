import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output()
  onHide: EventEmitter<any> = new EventEmitter();

  @Output()
  onShow: EventEmitter<any> = new EventEmitter();

  constructor(private element: ElementRef) {
    super();
   }

  ngOnInit(): void {
    const el: HTMLElement = this.element.nativeElement;
    el.querySelector('[modal-title]')?.classList.add('modal-title');
    el.querySelector('[modal-body]')?.classList.add('modal-body');
    el.querySelector('[modal-footer]')?.classList.add('modal-footer');

    $(this.getDivModal).on('hidden.bs.modal', (e: any) => {
      console.log('esconder ',e);
      this.onHide.emit(e);
    });

    $(this.getDivModal).on('shown.bs.modal', (e: any) => {
      console.log('mostrar ', e);
      this.onShow.emit(e);
    });

  }

  override show(){
    // const divModal = this.getDivModal();
    $(this.getDivModal).modal('show');
  }

  override hide(){
    // const divModal = this.getDivModal();
    $(this.getDivModal).modal('hide');
  }

  get getDivModal(): HTMLElement {
    const el: HTMLElement = this.element.nativeElement;
    return el.firstChild as HTMLElement;
  }

}
