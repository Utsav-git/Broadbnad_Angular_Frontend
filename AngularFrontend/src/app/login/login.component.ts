import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.email, this.password);

    if (this.email == 'admin1@gmail.com' && this.password == 'admin123') {
      alert('Login Successful');
      this.route.navigate(['./header']);
    } else {
      alert('Please enter Correct Credentials');
      this.route.navigate(['']);
    }
  }
}
