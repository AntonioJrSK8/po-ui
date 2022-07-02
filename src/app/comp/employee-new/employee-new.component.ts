import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../service/employee.service';
import { ModalRefService } from '../modal-dynamic/modal-ref.service';

@Component({
  selector: 'app-employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent   implements OnInit {

  employee: Employee = {
      name: '',
      salary: 0,
      bonus: 0,
    }
  @ViewChild('inputName') inputName!: ElementRef;

  // employees = employee;

  constructor(private employeeService: EmployeeService, private modalRef: ModalRefService) { 
    
  }

  ngOnInit(): void {
      this.modalRef.onShow.subscribe(()=>{
        this.inputName.nativeElement.focus();
      });
  }

  addEmployee(event: any) {
    console.log(event);

    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);

    const data:any = {employee: copy, submitted: true};

    this.modalRef.hide(data);
    
  }

}
