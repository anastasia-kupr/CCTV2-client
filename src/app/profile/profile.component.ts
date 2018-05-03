import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  user: any = {};
  userData: any;

  ngOnInit() {

    this.userData = JSON.parse(window.localStorage.getItem('userData'));

    this.http.get('http://localhost:3000/user/' + this.userData.uuid).subscribe((data: any) => {
      if (data) {
          this.user = data;
          this.user.password = "";
      }
    });
  }

}
