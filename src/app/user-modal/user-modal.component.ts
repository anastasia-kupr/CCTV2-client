import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.css']
})
export class UserModalComponent implements OnInit {

  @Input() modalData: any;

  constructor() {
    if (!this.modalData) {
      this.modalData = {user: {email: ''}};
    }
  }

  id = Math.random();

  show(): void {
    console.log('modalData=', this.modalData);

  }

  ngOnInit() {
    if (!this.modalData) {
      this.modalData = {user: {email: ''}};
    }
    console.log('modalData=', this.modalData);
  }

}
