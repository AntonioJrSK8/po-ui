import { Injectable } from '@angular/core';
import { ModalDynamicComponent } from './modal-dynamic/modal-dynamic.component';

@Injectable()
export class ModalRefService {

  instance!: ModalDynamicComponent;

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
}
