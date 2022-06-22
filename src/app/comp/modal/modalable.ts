import { Directive, ViewChild } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Directive()
export class Modalable {

    @ViewChild(ModalComponent) modal: ModalComponent | any;

    show(){
        this.modal.show();
    }

    hide(){
        this.modal.hide();
    }

}
