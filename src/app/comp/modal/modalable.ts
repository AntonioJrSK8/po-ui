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

    }

    ngAfterContentInit(): void {
      //Called after ngOnInit when the component's or directive's content has been initialized.
      //Add 'implements AfterContentInit' to the class.
      console.log('After Content Init Modalable')
    }

    show(){
        console.log('Show modalable...')
        this.modalComponent.show();
    }

    hide(){
        this.modalComponent.hide();
    }

}
