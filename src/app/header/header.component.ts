import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  active = 'active';
  notActive = 'notActive';

  url = '';





  constructor(
    private location: Location,
    private router: Router
  ) {
    this.router.events.subscribe((val) => {
      if (location.path() != '') {
        this.url = location.path();
      } else {
        this.url = 'Home'
      }
    });
  }




  ngOnInit() {
  }

}
