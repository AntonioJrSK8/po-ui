import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoModalAction, PoModalComponent, PoNotificationService } from '@po-ui/ng-components';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario.service';

@Component({
  selector: 'funcionario-modal-poui',
  templateUrl: './funcionario-modal-poui.component.html',
  styleUrls: ['./funcionario-modal-poui.component.css']
})
export class FuncionarioModalPouiComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent | any;
  
  @ViewChild('optionsForm', { static: true }) form: NgForm | any;

  funcionario: Funcionario = {
    nome: '',
    cpf: '',
    celular: '',
    salario: 0,
    bonus:0,
  };
  
  constructor(private funcionarioService: FuncionarioService, private poNotification: PoNotificationService) { }

  ngOnInit(): void {
  }

  showModal() {
    this.poModal.open();
  }
  closeModal(){
    this.poModal.close();
  }

  confirm: PoModalAction = {
    action: () => { this.salvar(); },
    label: 'Salvar',
  }
  close: PoModalAction = {
    action: () => { this.closeModal(); },
    label: 'Fechar',
  }

  private salvar() {
    if (this.form.invalid) {
      const orderInvalidMessage = 'Choose the items to confirm the order.';
      this.poNotification.warning(orderInvalidMessage);
    } else {
      this.confirm.loading = true;
      this.funcionarioService.add(this.funcionario);

      setTimeout(() => {
        this.poNotification.success(`Você confirmou: ${this.funcionario.nome} a gravação`);
        this.confirm.loading = false;
        this.closeModal();
      }, 700);
    }
  }


}
