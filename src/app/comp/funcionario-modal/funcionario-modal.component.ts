import { Component, ElementRef, OnInit, Output, EventEmitter } from '@angular/core';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario.service';


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
  };
  
  @Output()
  onSubmit: EventEmitter<Funcionario> = new EventEmitter<Funcionario>();

  constructor(private element: ElementRef, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }

  show(){
    const divModal = this.getDivModal();
    $(divModal).modal('show');
  }
  hide(){
    const divModal = this.getDivModal();
    $(divModal).modal('hide');
  }
  getDivModal(): HTMLElement {
    const el: HTMLElement = this.element.nativeElement;
    return el.firstChild?.firstChild as HTMLElement;
  }
  
  addFuncionario(funcionario:any){
    
    this.funcionarioService.add(funcionario);
    this.onSubmit.emit(funcionario);

    setTimeout(() => {
      this.hide();
    }, 1000);
  }

  editarFuncionario(funcionario: Funcionario){
   
      console.log(funcionario);
      this.funcionario = funcionario;

      this.show();
  }

}
