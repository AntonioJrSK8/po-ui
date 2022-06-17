import { Component, OnInit, ViewChild } from '@angular/core';
import { PoButtonGroupItem, PoNotificationService, PoTableAction, PoTableColumn, PoTableComponent } from '@po-ui/ng-components';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import { FuncionarioModalPouiComponent } from '../funcionario-modal-poui/funcionario-modal-poui.component';
import { FuncionarioModalComponent } from '../funcionario-modal/funcionario-modal.component';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  @ViewChild(FuncionarioModalComponent) funcionarioModal: FuncionarioModalComponent | any;
  @ViewChild(FuncionarioModalPouiComponent) funcionarioModalPoui: FuncionarioModalPouiComponent | any;
  @ViewChild(PoTableComponent) poTable: PoTableComponent | any;

  funcionarios = this.funcionarioService.Funcionarios;
  //funcionariosSelecionados: Array<Funcionario> = [];

  colunas: PoTableColumn[] = [
    { property: 'nome', width: '30%' },
    { property: 'cpf', width: '30%' },
    { property: 'celular', width: '30%', type: 'cellTemplate' },
    { property: 'salario', width: '30%', type: 'cellTemplate' },
  ];

  butoes: Array<PoButtonGroupItem> = [
    { icon: 'po-icon-document', action: () => (this.novoFuncionario()), tooltip: 'Novo' },
    { icon: 'po-icon-edit', action: () => (this.funcionarioModalPoui.showModal()), tooltip: 'Editar' },
    { icon: 'po-icon-delete', action: () => (this.totalSelecionados()), tooltip: 'Excluir' }
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

  constructor(private funcionarioService: FuncionarioService, private poNotification: PoNotificationService) {};

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
    //
  }

  unselecionados(item:any){
    //    
  }
  
  totalSelecionados(): number{
    // this.funcionariosSelecionados.length = 0;
    // this.funcionariosSelecionados.push(this.poTable.getSelectedRows());
    return this.poTable.getSelectedRows().length;
    // console.table(this.poTable.getSelectedRows());
  }

  addFuncionario(funcionario:any){
    console.table(funcionario);
  }

  novoFuncionario(){
    this.funcionarioModal.funcionario = [];
    this.funcionarioModal.show();
  }
}
