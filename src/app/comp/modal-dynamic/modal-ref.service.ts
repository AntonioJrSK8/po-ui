import { ApplicationRef, ComponentRef, Injectable } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';

@Injectable()
export class ModalRefService {

  instance!: ModalDynamicComponent;

  contexto: any = {};

  appRef!: ApplicationRef;

  constructor() { }

  hide(event = null) {
    this.instance.hide(event);
  }
  show(event = null) {
    this.instance.show(event);
  }
  get onShow() {
    return this.instance.onShow;
  }
  get onHide() {
    return this.instance.onHide;
  }
  set componentRef(compRef: ComponentRef<ModalDynamicComponent>) {
    const instance = compRef.instance;

    instance.onHide.subscribe(()=>{
      instance.dispose();
      this.appRef.detachView(compRef.hostView);
      compRef.destroy();
    });

  }
}
