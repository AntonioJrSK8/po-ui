import { Component, OnInit } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import employee from '../interface/employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = employee; 
  columns: Array<PoTableColumn> = [
      { property: 'name', width: '50%', type: 'cellTemplate'},
      { property: 'salary', width: '40%' },
      { property: 'bonus', width: '10%' },
  ];

  constructor() { }

  ngOnInit(): void {
    
    console.log(this.columns);
  }

}
