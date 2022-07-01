import { Component, ElementRef, Injector, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { ModalContentDirective } from './../modal-content.directive';
import { ModalRefService } from './../modal-ref.service';

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

  @ViewChild(ModalContentDirective , {static: true }) modalContentDirective!: ModalContentDirective;

  modalRef!: ModalRefService;

  constructor(private element: ElementRef,
              private injector: Injector) { }

  ngOnInit(): void {
  }

  mount(modalImplementedComponent: any){
    const modalContent = this.modalContentDirective.viewContainerRef;
    modalContent.clear();
    modalContent.createComponent<any>(modalImplementedComponent, undefined, this.makeLocalInjector());
    // return this.modalRef;
  }

  private makeLocalInjector(){
    return Injector.create({
      providers: [
          {provide: ModalRefService, useValue: this.makeModalRef()}
      ],
      parent: this.injector
    });
  }

  private makeModalRef() {
    // construindo instancia local
    const modalRef = new ModalRefService();
    modalRef.instance = this;
    return modalRef;

    // const componentFactory = this.componentFactoryResolver.resolveComponentFactory(modalImplementedComponent);
    // const viewContainerRef = this.modalContentDirective.viewContainerRef;
    // viewContainerRef.createComponent(componentFactory);
    // const modalContent = this.modalContentDirective.viewContainerRef;
    // modalContent.clear();
    // modalContent.createComponent<any>(modalImplementedComponent);
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
