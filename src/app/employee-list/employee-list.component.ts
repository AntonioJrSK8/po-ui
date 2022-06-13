import { Component, OnInit } from '@angular/core';
import employee from '../interface/employees';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees = employee;
  
  constructor() { }

  ngOnInit(): void {
  }

}
