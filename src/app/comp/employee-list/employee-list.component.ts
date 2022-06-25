import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { FuncionarioService } from 'src/app/service/funcionario.service';
import employee from '../../interface/employees';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = this.funcionarioService.Funcionarios;
   
  columns: Array<PoTableColumn> = [
      { property: 'nome', width: '50%', type: 'cellTemplate'},
      { property: 'salario', width: '40%' },
      { property: 'bonus', width: '10%' },
  ];

  constructor(private employeeService: EmployeeService, private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    
    console.log(this.columns);
  }

}
