import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario.service';
import { Modalable } from '../modal/modalable';
import { ModalComponent } from './../modal/modal.component';


declare const $: any;

@Component({
  selector: 'funcionario-modal',
  templateUrl: './funcionario-modal.component.html',
  styleUrls: ['./funcionario-modal.component.css']
})

export class FuncionarioModalComponent extends Modalable implements OnInit {

  funcionario: Funcionario = {
    nome: '',
    cpf: '',
    celular: '',
    salario: 0,
    bonus:0,
  };

  @Output()
  onSubmit: EventEmitter<Funcionario> = new EventEmitter<Funcionario>();

  @ViewChild(ModalComponent)
  modalComp: ModalComponent = new ModalComponent(this.element);

  @ViewChild('inputNome') inputNome!: HTMLElement;

  constructor(private funcionarioService: FuncionarioService, private element: ElementRef) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    setTimeout(() => {
      this.modalComponent.onHide.subscribe(event => {
        console.log('subscribe');
      })
    }, 1);


    // super.ngOnInit();
    // this.onShow.subscribe(()=>{
    //     console.log('show');
    // });

  }

  // show(){
  //   // console.log('Input ',this.inputNome);
  //   this.modalComp.show()
  // }

  // hide(){
  //   this.modalComp.hide();
  // }

  fechou(event:any){
    console.log('fechou ',event);
  }
  mostrar(event:any){
    console.log('mostrar ', event)
  }

  addFuncionario(funcionario:any){
    this.funcionarioService.add(funcionario);
    this.onSubmit.emit(funcionario);
    this.hide();
  }

  editarFuncionario(funcionario: Funcionario){
      this.funcionario = funcionario;
      this.show();
  }

}
