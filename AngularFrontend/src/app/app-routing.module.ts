import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'employee-list',
    component: EmployeeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'edit/:id',
    component: UpdateEmployeeComponent,
  },
  {
    path: 'add',
    component: AddEmployeeComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [
  HomeComponent,
  EmployeeComponent,
  HeaderComponent,
  LoginComponent,
  UpdateEmployeeComponent,
  AddEmployeeComponent,
];