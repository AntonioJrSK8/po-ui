import { Injectable } from '@angular/core';

export interface Funcionario {
  nome: string;
  cpf: string;
  celular: string;
  salario:number
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

}
