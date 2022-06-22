import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent } from '@po-ui/ng-components';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario.service';

declare const $: any;

@Component({
  selector: 'funcionario-modal-exclusao',
  templateUrl: './funcionario-modal-exclusao.component.html',
  styleUrls: ['./funcionario-modal-exclusao.component.css']
})
export class FuncionarioModalExclusaoComponent implements OnInit {
  
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent | any;

  @Input()
  funcionario: Funcionario = {
    nome: '',
    cpf: '',
    celular: '',
    salario: 0,
    bonus: 0,
  };

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }

  show(){
    this.primaryAction.danger = true;
    this.poModal.open();
  }
  hide(){
    this.poModal.close();
  }

  primaryAction: PoModalAction = {
    action: () => {
      const copy = Object.assign({},this.funcionario);
      this.funcionarioService.destroy(this.funcionario);
      setTimeout(() => {
        this.poModal.close();
      }, 200);
    },
    label: 'Confirm',

  };
  secondaryAction: PoModalAction = {
    action: () => {
      this.poModal.close();
    },
    label: 'Not Confirm'
  };
}
