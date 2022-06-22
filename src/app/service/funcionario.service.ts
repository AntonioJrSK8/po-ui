import { Injectable } from '@angular/core';

export interface Funcionario {
  nome: string;
  cpf: string;
  celular: string;
  salario:number;
  bonus:number;
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  Funcionarios: Funcionario[] = [];

  constructor() { }

  add(funcionario: Funcionario){
    const copy = Object.assign({}, funcionario);
    this.Funcionarios.push(copy);
  }
  edit(funcionario: Funcionario){
    //
  }
  destroy(funcionario: Funcionario){
    const index = this.Funcionarios.indexOf(funcionario);
    console.log('index: ', index);
    this.Funcionarios.splice(index, 1);
  }

}
