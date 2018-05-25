import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {CONFIG} from '../../../../config';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  user: any = {};
  userData: any;

  postUser($event): any {
    if (!this.user.password) {
      alert("Passwords is empty");
      var elem = $(document.querySelector('#password'));
      elem.focus();
      $event.stopPropagation();
      return;
    }
    if ((this.user.password) && (this.user.password) && (this.user.password != this.user.confirmPassword)) {
      alert("Passwords do not match");
      var elem = $(document.querySelector('#password'));
      elem.focus();
      this.user.password = '';
      this.user.confirmPassword = '';
      $event.stopPropagation();
      return;
    }
    var body = Object.assign({}, this.user);
    return this.http.put(CONFIG.serverURL + '/user/' + this.user.uuid, body).subscribe((data: any) => {
      if (!data) return;
    });

  }

  ngOnInit() {

    this.userData = this.authService.getUserData();

    this.http.get(CONFIG.serverURL + '/user/' + this.userData.uuid).subscribe((data: any) => {
      if (data) {
        this.user = data;
        this.user.password = "";
      }
    });
  }

}
