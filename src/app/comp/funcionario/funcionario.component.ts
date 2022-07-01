import { Component, OnInit, ViewChild } from '@angular/core';
import { PoButtonGroupItem, PoNotificationService, PoTableAction, PoTableColumn, PoTableComponent } from '@po-ui/ng-components';
import { Funcionario, FuncionarioService } from 'src/app/service/funcionario.service';
import { FuncionarioModalEditComponent } from '../funcionario-modal-edit/funcionario-modal-edit.component';
import { FuncionarioModalExclusaoComponent } from '../funcionario-modal-exclusao/funcionario-modal-exclusao.component';
import { FuncionarioModalPouiComponent } from '../funcionario-modal-poui/funcionario-modal-poui.component';
import { FuncionarioModalComponent } from '../funcionario-modal/funcionario-modal.component';
import { EmployeeNewComponent } from './../employee-new/employee-new.component';
import { ModalService } from './../modal-dynamic/modal.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  @ViewChild(FuncionarioModalComponent) funcionarioModal: FuncionarioModalComponent | any;
  @ViewChild(FuncionarioModalPouiComponent) funcionarioModalPoui: FuncionarioModalPouiComponent | any;
  @ViewChild(PoTableComponent) poTable: PoTableComponent | any;
  @ViewChild(FuncionarioModalEditComponent) funcionarioModalEdit: FuncionarioModalEditComponent | any;
  @ViewChild(FuncionarioModalExclusaoComponent) funcionarioModalExclusao: FuncionarioModalExclusaoComponent | any;

  funcionarios = this.funcionarioService.Funcionarios;

  funcionarioToEdit: Funcionario = {
    nome: '',
    cpf: '',
    celular: '',
    salario: 0,
    bonus:0,
  };

  funcionarioToDestroy: Funcionario = {
    nome: '',
    cpf: '',
    celular: '',
    salario: 0,
    bonus:0,
  }

  registrado: boolean = false;

  colunas: PoTableColumn[] = [
    { property: 'nome', width: '30%' },
    { property: 'cpf', width: '30%' },
    { property: 'celular', width: '30%', type: 'cellTemplate' },
    { property: 'salario', width: '30%', type: 'cellTemplate' },
    { property: 'bonus', width: '30%', type: 'cellTemplate' },
  ];

  butoes: Array<PoButtonGroupItem> = [
    { icon: 'po-icon-document', action: () => (this.novoFuncionario()), tooltip: 'Novo' },
    { icon: 'po-icon-edit', action: () => (this.editFuncionario()), tooltip: 'Editar' },
    { icon: 'po-icon-delete', action: () => (this.destroyFuncionario()), tooltip: 'Excluir' },
    { icon: 'po-icon-delete', action: () => (this.novoFuncionario2()), tooltip: 'Excluir' },
    { icon: 'po-icon-delete2', action: () => (this.funcionarioModalPoui.showModal()), tooltip: 'Excluir PO-UI' }
  ];

  actions: Array<PoTableAction> = [
  {
    action: this.editar.bind(this),
    icon: 'po-icon-edit',
    label: 'Editar',
    // disabled: this.desAcao.bind(this)
  },
  {
    action: this.editar.bind(this),
    icon: 'po-icon-delete',
    label: 'Excluir',
    // disabled: this.desAcao.bind(this)
  },
];

  constructor(private funcionarioService: FuncionarioService, private poNotification: PoNotificationService, private modalService: ModalService) {}

  ngOnInit(): void {
  }

  editar(){
    if (this.totalSelecionados()==1)
      this.funcionarioModal.editarFuncionario(this.poTable.getSelectedRows()[0])
    else this.poNotification.error('Selecionar apenas um registro');
  }

  desAcao(){
    this.poNotification.success('desAção acionada!');
  }

  selecionados(item: any){
    console.log(item);
  }

  fechou(event:any){
    console.log('funcionario componente ',event);
  }
  unselecionados(item:any){
    console.log(item);
  }

  totalSelecionados(): number{
    return this.poTable.getSelectedRows().length;
  }

  addFuncionario(funcionario:any){
    console.log(funcionario);
    this.registrado = true;
    setTimeout(() => {
      this.registrado = false;
    }, 2000);

  }
  novoFuncionario(){
    this.funcionarioModal.funcionario = [];
    this.funcionarioModal.show();
  }

  novoFuncionario2(){
    this.modalService.open(EmployeeNewComponent);
  }
  editFuncionario(){
    if (this.totalSelecionados()==1) {
       this.funcionarioToEdit = this.poTable.getSelectedRows()[0];
       this.funcionarioModalEdit.show();
    } else {
        this.poNotification.error('Selecionar apenas um registro');
    }
  }

  destroyFuncionario(){
    if (this.totalSelecionados()==1) {
      this.funcionarioToDestroy = this.poTable.getSelectedRows()[0];
      this.funcionarioModalExclusao.show();

   } else {
       this.poNotification.error('Selecionar apenas um registro');
   }
  }
}
