import { Component, OnInit } from '@angular/core';
import employee from '../interface/employees';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {
  
  name = '';
  employees = employee;
  
  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(event: any) {
    this.employees.push({name : this.name});
  }

}
