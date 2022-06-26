import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { InputDirective } from 'src/app/diretiva/input.directive';
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

  @Output()
  override onHide: EventEmitter<any> = new EventEmitter();

  @ViewChild(ModalComponent)
  modalComp: ModalComponent = new ModalComponent(this.element);

  // @ViewChild('inputNome') inputNome!: ElementRef;
  // @ViewChild(InputDirective) input!:InputDirective;
  @ViewChild('inputSalary', {read: InputDirective}) input!:InputDirective;

  @ViewChildren(InputDirective) inputs!: InputDirective;

  constructor(private funcionarioService: FuncionarioService, private element: ElementRef) {
    super();
  }

  override ngOnInit() {
    
    setTimeout(() => {
      this.modalComponent.onShow.subscribe(event=> {
        // this.inputNome.nativeElement.focus();
        // console.log(this.input);
        this.input.focus();
      })
    }, 1);
    
    setTimeout(() => {
      this.modalComponent.onHide.subscribe(event => {
        console.log('subscribe', event);
        this.onHide.emit(event);
      })
    }, 1);
  }

  override ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('After Content Init FuncionarioMoral');
    setTimeout(() => {
      console.log(this.inputs);  
    }, 1);

    super.ngAfterContentInit();
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
