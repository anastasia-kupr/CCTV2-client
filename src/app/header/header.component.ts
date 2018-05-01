import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

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
  userRole: string = '';

  url = '';
  authService: AuthService;

  constructor(
    private location: Location,
    private router: Router,
    authService: AuthService
  ) {
    this.authService = authService;
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
    this.isUserLoggedIn = this.authService.getUser();
    this.user = JSON.parse(window.localStorage.getItem('userData'));
  }

}
