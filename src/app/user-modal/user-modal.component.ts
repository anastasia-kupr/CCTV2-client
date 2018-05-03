import {Component, EventEmitter, OnInit, Input, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as $ from 'jquery';
import {UserManagementComponent} from '../user-management/user-management.component';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  @Input() modalData: any;
  @Output() onVoted = new EventEmitter<any>();

  constructor(private http: HttpClient) {
    if (!this.modalData) {
      this.modalData = {user: {email: ''}};
    }
  }

  id = 'id' + Math.floor(Math.random() * (100 + 1));

  vote() {
    this.onVoted.emit();
  }

  postUser($event): any {
    if ((!this.modalData.user.email) || this.modalData.user.email.indexOf("@") < 0) {
        alert("Email is not valid");
        var elem = $('#' + this.id + '-userEmail');
        elem.addClass('invalid');
        elem.focus();
        $event.stopPropagation();
        return;
    }
    if ((this.modalData.user.password) && (this.modalData.user.password) && (this.modalData.user.password != this.modalData.user.confirmPassword)) {
      alert("Passwords do not match");
      var elem = $(document.querySelector('#' + this.id + '-password'));
      elem.focus();
      this.modalData.user.password = '';
      this.modalData.user.confirmPassword = '';
      $event.stopPropagation();
      return;
    }
    var body = Object.assign({}, this.modalData.user);
    if (this.modalData.changing) {
      return this.http.put('http://localhost:3000/user/' + this.modalData.user.uuid, body).subscribe((data: any) => {
        if (!data) return;
        this.vote();
      });
    }
    return this.http.post('http://localhost:3000/user', body).subscribe((data: any) => {
      if (!data) return;
      this.vote();
    });

  }

  ngOnInit() {
    if (!this.modalData) {
      this.modalData = {user: {email: ''}};
    }
  }

}
