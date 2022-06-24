import { Directive, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Directive()
export class Modalable implements OnInit{

    @ViewChild(ModalComponent)
    modalComponent!: ModalComponent;

    @Output()
    onHide: EventEmitter<any> = new EventEmitter();

    @Output()
    onShow: EventEmitter<any> = new EventEmitter();


    constructor(){}

    ngOnInit(): void {

      setTimeout(() => {
        this.modalComponent.onHide.subscribe((event: any) => {
          console.log(event);
          this.onHide.emit(event);
        });
      }, 1000);

    }

    show(){
        console.log('Show modalable...')
        this.modalComponent.show();
    }

    hide(){
        this.modalComponent.hide();
    }

}
