import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router){}

  login() {
    this.router.navigate([''])
  }
}
