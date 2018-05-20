import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  id = '';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get('http://localhost:3000/users/').subscribe();
  }

}
