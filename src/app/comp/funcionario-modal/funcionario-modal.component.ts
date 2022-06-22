import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario.service';
import { Modalable } from './../modal/modalable';
// import { ModalComponent } from './../modal/modal.component';


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

  // @ViewChild(ModalComponent) modalComp!: ModalComponent | any;

  constructor(private funcionarioService: FuncionarioService) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    // this.modal.onHide.subscribe((event: any) => {
    //   console.log(event);
    // });
  }

  // override show(){
  //   this.modal.show()
  // }

  // override hide(){
  //   this.modal.hide();
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
