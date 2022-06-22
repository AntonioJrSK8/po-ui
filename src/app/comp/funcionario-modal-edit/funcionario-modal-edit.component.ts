import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario.service';

declare const $: any;

@Component({
  selector: 'funcionario-modal-edit',
  templateUrl: './funcionario-modal-edit.component.html',
  styleUrls: ['./funcionario-modal-edit.component.css']
})
export class FuncionarioModalEditComponent implements OnInit {

  @Input()
  funcionario: Funcionario = {
    nome: '',
    cpf: '',
    celular: '',
    salario: 0,
    bonus:0,
  };

  constructor(private funcionarioService: FuncionarioService, private element: ElementRef) { }

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
  private getDivModal(): HTMLElement {
    const el: HTMLElement = this.element.nativeElement;
    return el.firstChild?.firstChild as HTMLElement;
  }
  editFuncionario(funcionario: Funcionario){
    console.table(funcionario);
    this.hide();
  }
}
