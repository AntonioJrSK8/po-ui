import { Component, ElementRef, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario.service';
import { ModalComponent } from '../modal/modal.component';
import { Modalable } from '../modal/modalable';


declare const $: any;

@Component({
  selector: 'funcionario-modal',
  templateUrl: './funcionario-modal.component.html',
  styleUrls: ['./funcionario-modal.component.css']
})

export class FuncionarioModalComponent implements OnInit {

  funcionario: Funcionario = {
    nome: '',
    cpf: '',
    celular: '',
    salario: 0,
    bonus:0,
  };

  @Output()
  onSubmit: EventEmitter<Funcionario> = new EventEmitter<Funcionario>();

  @ViewChild(ModalComponent) modal!: ModalComponent | any;

  constructor(private element: ElementRef, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }

  show(){
    this.modal.show()
  }

  hide(){
    this.modal.hide();
  }
  fechou(event:any){
    console.log(event);
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
