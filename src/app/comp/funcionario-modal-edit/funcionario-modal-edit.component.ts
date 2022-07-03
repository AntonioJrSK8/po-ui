import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario.service';
import { ModalRefService } from '../modal-dynamic/modal-ref.service';

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

  constructor(private funcionarioService: FuncionarioService, 
              private element: ElementRef,
              private modalRef: ModalRefService) {
                  this.funcionario = this.modalRef.contexto['funcionario'];
               }

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
    const copy = Object.assign({},funcionario);
    const data:any = {funcionario: copy, submitted: true};
    this.modalRef.hide(data);

    // this.hide();
  }
}
