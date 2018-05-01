import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  router: Router;

  constructor(router: Router) {
    this.router = router;
  }


  token = window.localStorage.getItem('token');

  getUser(): any {
    return this.token;
  };

  logOut(): void {
    if (this.token) {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('userData');
      this.router.navigate(['/login']);
    }
    this.router.navigate(['/login']);
  };


}
