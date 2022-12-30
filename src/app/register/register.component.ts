import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'pm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  userGroup = new FormGroup({
    'fullname': new FormControl('', [Validators.required]),
    'email': new FormControl('', [Validators.email]),
    'password': new FormControl('', [Validators.required]),
  })

  constructor(private router: Router, private authService: AuthService){}

  register() {
    const user = this.userGroup.getRawValue();
    this.authService.register(user).subscribe( s => this.router.navigate(['/login']))
  }
}
