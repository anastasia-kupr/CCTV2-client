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
  deleteVideo = '';
  user = {
    username: '',
    role: ''
  };

  onRemoveBntClick(name): void {
    this.deleteVideo = name;
  }

  removeVideo(): void {
    this.http.delete('http://localhost:3000/video/record/' + this.deleteVideo).subscribe((data: any) => {
      this.getVideoList();
    });
  }

  getVideoList(): void {
    this.http.get('http://localhost:3000/video/list').subscribe((data: Array<Object>) => {
      this.videoList = data;
    });

  }

  ngOnInit() {
    this.getVideoList();
    this.user = JSON.parse(window.localStorage.getItem('userData'));
  }

}
