import { EventEmitter, Injectable, OnInit, Output, ViewChild } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Injectable()
export class Modalable implements OnInit{

    @ViewChild(ModalComponent)
    modalComponent!: ModalComponent;

    @Output()
    onHide: EventEmitter<any> = new EventEmitter();

    @Output()
    onShow: EventEmitter<any> = new EventEmitter();


    constructor(){}

    ngOnInit(): void {

    this.modalComponent.onHide.subscribe((event: any) => {
        console.log(event);
        this.onHide.emit(event);
      });
    }

    show(){
        this.modalComponent.show();
    }

    hide(){
        this.modalComponent.hide();
    }

}
