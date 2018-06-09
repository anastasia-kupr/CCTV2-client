import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
declare var toastr;

@Injectable()
export class AuthService {
  router: Router;

  constructor(router: Router, private http: HttpClient) {
    this.router = router;
  }

  token = window.localStorage.getItem('token');

  static getToken(): any {
    return window.localStorage.getItem('token');
  }

  setToken(token): void {
    window.localStorage.setItem('token', token);
  }

  getUserData(): any {
    var userData = JSON.parse(window.localStorage.getItem('userData'));
    return userData;
  }

  setUserData(user): void {
    window.localStorage.setItem('userData', JSON.stringify({email: user.email, role: user.role, uuid: user.uuid}));
  }

  logOut(): void {
    if (this.token) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userData');
      console.log('removed token, removed userData');
      this.router.navigate(['/login']);
    }
    this.router.navigate(['/login']);
  };
}
