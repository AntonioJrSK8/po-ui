import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';
import { ModalRefService } from './modal-ref.service';

@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  modalRef!: ModalRefService;

  constructor(private componentFactory: ComponentFactoryResolver,
              private injector: Injector,
              private appRef: ApplicationRef) { }

  open(modalImplementedComponent: any) {
    // const componentRef = this.viewContainerRef.createComponent(ModalDynamicComponent);
    // this.appRef.attachView(componentRef.hostView);
    // const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    // document.body.appendChild(domElement);

    const componentRef = this.componentFactory
                            .resolveComponentFactory(ModalDynamicComponent)
                            .create(this.injector);

    componentRef.instance.mount(modalImplementedComponent);

    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElement);

    componentRef.instance.show();

  }
}
