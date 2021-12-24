import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IEmployee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  constructor(public _empService: EmployeeService) {}
  Emp: IEmployee[] = [];
  model = {};
  ngOnInit(): void {}
  onSubmit(value: any) {
    console.log(
      'Submitted' +
        '\n' +
        value.empid +
        '\n' +
        value.empname +
        '\n' +
        value.email +
        '\n' +
        value.phone +
        '\n' +
        value.address
    );
  }
  insertEmployee(form: any) {
    console.log(form);

    this._empService.InsertEmployee(form);
    window.alert('Successfully Inserted');

  }

}
