import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private componentFactory: ComponentFactoryResolver,
              private injector: Injector,
              private appRef: ApplicationRef) { }

  open(modalImplementedComponent: any) {
    // const componentRef = this.viewContainerRef.createComponent(ModalDynamicComponent);
    // this.appRef.attachView(componentRef.hostView);
    // const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // document.body.appendChild(domElement);

    // criação e injeção
    const componentRef = this.componentFactory
                            .resolveComponentFactory(ModalDynamicComponent)
                            .create(this.injector);
    // montagem do componente
    componentRef.instance.mount(modalImplementedComponent);

    // add no dom
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElement);

    //mostra o modal
    componentRef.instance.show();

  }
}
