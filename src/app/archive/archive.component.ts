import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(
    private http: HttpClient,
  ) {}

  videoList = [];

  ngOnInit() {
    this.http.get('http://localhost:3000/video/list').subscribe((data: Array<Object>) => {
      this.videoList = data;
    });
  }

}
