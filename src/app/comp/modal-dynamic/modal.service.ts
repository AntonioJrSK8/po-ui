import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';
import { ModalRefService } from './modal-ref.service';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  modalRef!: ModalRefService;

  constructor(private componentFactory: ComponentFactoryResolver,
              private injector: Injector,
              private appRef: ApplicationRef) { }
  
  create(modalImplementedComponent: any): ModalRefService {
    // criação e injeção
    const componentRef = this.componentFactory
                            .resolveComponentFactory(ModalDynamicComponent)
                            .create(this.injector);
    // montagem do componente
    this.modalRef = componentRef.instance.mount(modalImplementedComponent);
    // add no dom
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElement);

    // retorna a referencia do modal referencia
    return this.modalRef;
  }

  open() {
    this.modalRef.show();
  }

  detroy() {
    
  }
}
