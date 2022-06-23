import { EventEmitter, Injectable, OnInit, Output, ViewChild } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Injectable()
export class Modalable implements OnInit{

    @ViewChild(ModalComponent)
    modal!: ModalComponent;

    @Output()
    onHide: EventEmitter<any> = new EventEmitter();

    @Output()
    onShow: EventEmitter<any> = new EventEmitter();


    constructor(){}

    ngOnInit(): void {

      console.log('ModalComp ',this);
      this.modal.onHide.subscribe((event: any) => {
        console.log(event);
        //this.onHide.emit(event);
      });

      // this.modal.onShow.subscribe((event: any) => {
      //     console.log(event);
      //     this.onShow.emit(event);
      // });
    }

    show(){
        this.modal.show();
    }

    hide(){
        this.modal.hide();
    }

}
