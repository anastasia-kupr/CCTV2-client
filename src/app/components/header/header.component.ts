import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {ErrorService} from '../../services/error.service';
declare var toastr;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active = 'active';
  notActive = 'notActive';
  isUserLoggedIn: any;
  user = {
    username: '',
    role: ''
  };

  url = '';

  constructor(
    private location: Location,
    private router: Router,
    private authService: AuthService,
    private errorService: ErrorService
  ) {
    this.router.events.subscribe((val) => {
      if (location.path() != '') {
        this.url = location.path();
      } else {
        this.url = 'Home'
      }
    });
  }

  logOut(): void {
    if (this.isUserLoggedIn) {
        this.authService.logOut();
    } else {
      this.router.navigate(['/login']);
    }
    this.authService.logOut();
  }

  ngOnInit() {
    this.isUserLoggedIn = AuthService.getToken();
    this.user = this.authService.getUserData();
    console.log('this.user=', this.user);
    if (!this.user) {
      console.log('!this.user');
      // this.errorService.showMsg('Authorization error');
      this.router.navigate(['/login']);
      return;
    }
  }
}
