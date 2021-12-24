import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  public emp: any;
  // searchVal: string = "";
  constructor(private _empService: EmployeeService) {}

  ngOnInit(): void {
    this._empService.GetEmployeeData().subscribe((data) => (this.emp = data));
  }
  deleteEmployee(id: any) {
    if (window.confirm('Confirm Delete ?')) {
      console.log(id);
      
      this._empService.DeleteEmployee(id)
    }
  }
}
