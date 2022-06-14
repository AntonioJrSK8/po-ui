import { Injectable } from '@angular/core';

export interface Employee {
  name: string;
  salary: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee: Employee[] =[];

  constructor() { }

  addEmployee(employee: Employee) {

    this.employee.push(employee);
  }
}
