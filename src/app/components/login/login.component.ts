import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgModel} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {CONFIG} from '../../../../config';
import * as $ from 'jquery';
declare var toastr;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router: Router;

  constructor(
    router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.router = router;
  }

  email: string;
  password: string;
  codeIsSent = false;
  code: string;

  setAuthData(data): void {
    var token = data.token.accessToken;
    this.authService.setToken(token);
    this.authService.setUserData(data.user);
    this.router.navigate(['/home']);
  }

  login($event): any {

    if (!this.email) {
      alert("Email is empty");
      var elem = $(document.querySelector('#email'));
      elem.focus();
      $event.stopPropagation();
      return;
    }
    if (!this.password) {
      alert("Password is empty");
      var elem = $(document.querySelector('#password'));
      elem.focus();
      $event.stopPropagation();
      return;
    }

    if (!this.codeIsSent) {
      return this.http.post(CONFIG.serverURL + '/login', {
        email: this.email,
        password: this.password,
      }).subscribe((data: any) => {
        if (!data) return;
        if (data.token && data.token.accessToken) {
          this.setAuthData(data);
          return;
        }
        toastr.success('The code was sent to your email');
        this.codeIsSent = true;
      });
    }

    this.http.post(CONFIG.serverURL + '/login/' + this.code, {
      email: this.email,
      password: this.password,
    }).subscribe((data: any) => {
      if (data && data.token) {
        this.setAuthData(data);
      }
    });


  }

  ngOnInit() {
  }

}
