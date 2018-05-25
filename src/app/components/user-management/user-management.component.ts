import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CONFIG} from '../../../../config';
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

  deleteUser = {
    name: '',
    uuid: ''
  };

  onUserModalClick(user): void {
    if (!user) {
      this.modalData.user = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        role: 'user'
      };
      this.modalData.changing = false;
      return;
    }
    this.modalData.user = Object.assign({}, user);
    this.modalData.changing = true;
  }

  onVoted() {
    this.getUsersList();
  }

  getUsersList(): any {
    return this.http.get(CONFIG.serverURL + '/users/').subscribe((data: any) => {
      if (data) {
        this.users = data;
      }
    });
  }

  onRemoveBtnClick(user): any {

    this.deleteUser.name = user.email;
    this.deleteUser.uuid = user.uuid;
  }

  removeUser(): any {
    return this.http.delete(CONFIG.serverURL + '/user/' + this.deleteUser.uuid).subscribe((data: any) => {
      this.getUsersList();
    });
  }

  ngOnInit() {

    this.getUsersList();
  }

}
