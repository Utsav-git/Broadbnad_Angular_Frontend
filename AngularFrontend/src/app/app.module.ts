import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadFormComponent } from './lead-form/lead-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeadFormComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SearchPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
