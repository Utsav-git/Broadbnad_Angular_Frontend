import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  emplist: any;
  employee: any[] = [];
  id: any;
  eid: any;
  constructor(
    public _empService: EmployeeService,
    public activeRoute: ActivatedRoute,
    public route: Router
  ) {}
  ngOnInit(): void {
    this.id = this.activeRoute.params.subscribe((params) => {
      this.eid = params['id'];
      this._empService.GetEmployeeData().subscribe((data) => {
        this.employee = data;
        this.emplist = this.employee.find((e) => e.empid == this.eid);
        console.log(this.emplist);
        console.log(this.employee);
      });
    });
  }

  updateEmployee(form: any) {
    this._empService.UpdateEmployee(form);
    window.alert('successfully Updated');
  }
}
