import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export interface User {
  email: string,
  fullname: string,
  password: string,
}

export class AuthService {
  private user$ = Subject<User>;
  
  constructor() { }

  login(email: string, password: string) {
    const loginCredentials = {email, password };
    console.log(loginCredentials);
    return of(loginCredentials)
  }
  
  get user() {
    this.user$.asObservable();
  }

  register(user: any) {
    this.user$.next(user)
    return of(user);
  }
}
