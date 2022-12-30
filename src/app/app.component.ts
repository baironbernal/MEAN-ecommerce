import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './models/user';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-mart';
  user: User = { email: '', fullname: '', password: ''};
  userSuscription = new Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.userSuscription = this.authService.user.subscribe(user => this.user = user);
  }
  
  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }

  ngOnDestroy() {
    this.userSuscription.unsubscribe();
  }
}
