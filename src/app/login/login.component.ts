import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router: Router;

  constructor(router: Router, private http: HttpClient) {
    this.router = router;
  }

  email: string;
  password: string;
  codeIsSent = false;
  code: string;

  login(): any {
    console.log('this.codeIsSent=', this.codeIsSent);
    if (!this.codeIsSent) {
      return this.http.post('http://localhost:3000/login', {
        email: this.email,
        password: this.password,
      }).subscribe((data: any) => {
        console.log('data=', data);
        if (!data) return;
        if (data.token && data.token.accessToken) {
          var token = data.token.accessToken;
          window.localStorage.setItem('token', token);
          window.localStorage.setItem('userData', JSON.stringify({email: data.user.email, role: data.user.role, uuid: data.user.uuid}));
          this.router.navigate(['/home']);
          return;
        }
        this.codeIsSent = true;
      });
    }

    this.http.post('http://localhost:3000/login/' + this.code, {
      email: this.email,
      password: this.password,
    }).subscribe((data: any) => {
      if (data && data.token) {
        var token = data.token.accessToken;
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('userData', JSON.stringify({email: data.user.email, role: data.user.role, uuid: data.user.uuid}));
        this.router.navigate(['/home']);
      }
    });


  }

  ngOnInit() {
  }

}
