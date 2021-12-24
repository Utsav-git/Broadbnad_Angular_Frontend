import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  data: any = {};
  public url = 'https://localhost:44305/api/Employee';
  // public url1 = 'https://localhost:44305/api';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  // GET Request
  GetEmployeeData(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.url);
  }

  // POST Request
  InsertEmployee(emp: any) {
    this.data = {
      empid: emp.empid,
      empname: emp.empname,
      email: emp.email,
      phone: emp.phone,
      address: emp.address,
    };
    console.log(JSON.stringify(this.data) + 'Service');

    this.http.post(this.url, this.data).subscribe((res) => {
      console.log(this.data.empid + 'empid inserted');
    });
  }

  //PUT Request
  UpdateEmployee(emp: any) {
    this.data = {
      empid: emp.empid,
      empname: emp.empname,
      email: emp.email,
      phone: emp.phone,
      address: emp.address,
    };
    console.log(JSON.stringify(this.data) + 'Service');

    this.http.put(this.url, this.data).subscribe((res) => {
      console.log(this.data.empid + 'empid updated');
    });
  }

  //DELETE Request
  DeleteEmployee(id: any) {
    return this.http.delete<IEmployee>(this.url, id).subscribe((res) => {
      console.log(id);

      this.GetEmployeeData();
    });
  }
}
