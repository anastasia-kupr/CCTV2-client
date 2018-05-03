import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
  router: Router;

  constructor(router: Router, private http: HttpClient) {
    this.router = router;
  }

  headers: HttpHeaders;


  token = window.localStorage.getItem('token');

  getUser(): any {
    return this.token;
  };

  static getToken(): any {
    return window.localStorage.getItem('token');
  }

  logOut(): void {
    if (this.token) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userData');
      this.router.navigate(['/login']);
    }
    this.router.navigate(['/login']);
  };

  setHeaters(): void {

  }


}
