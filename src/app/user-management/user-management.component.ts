import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';
var userManagementComponent;

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  constructor(private http: HttpClient) {
    userManagementComponent = this;    
  }

  changing: boolean;

  users = [];
  modalData = {
    user: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
      role: 'user'
    },
    changing: true
  }

  onUserModalClick(user): void {
    console.log('onUserModalClick');
    if (!user) {
      console.log('!user');
      this.modalData.user = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        role: 'user'
      };
      this.changing = false;
      return;
    }
    this.modalData.user = user;
    console.log('this.modalData.user=', this.modalData.user);
    this.changing = this.modalData.changing;
  }

  ngOnInit() {

    this.http.get('http://localhost:3000/login/users').subscribe((data: any) => {
      if (data) {
        this.users = data;
        console.log('this.users=', this.users);
      }
    });
  }

}
