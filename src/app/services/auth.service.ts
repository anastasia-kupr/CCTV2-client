import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  router: Router;

  constructor(router: Router, private http: HttpClient) {
    this.router = router;
  }

  token = window.localStorage.getItem('token');

  getUser(): any {
    return this.token;
  };

  static getToken(): any {
    return window.localStorage.getItem('token');
  }

  setToken(token): void {
    window.localStorage.setItem('token', token);
  }

  getUserData(): any {
    return JSON.parse(window.localStorage.getItem('userData'));
  }

  setUserData(user): void {
    window.localStorage.setItem('userData', JSON.stringify({email: user.email, role: user.role, uuid: user.uuid}));
  }

  logOut(): void {
    if (this.token) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userData');
      this.router.navigate(['/login']);
    }
    this.router.navigate(['/login']);
  };
}
