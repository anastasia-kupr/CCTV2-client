import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {CONFIG} from '../../../../config';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private authService: AuthService
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
    this.http.delete(CONFIG.serverURL + '/video/record/' + this.deleteVideo).subscribe((data: any) => {
      this.getVideoList();
    });
  }

  getVideoList(): void {
    this.http.get(CONFIG.serverURL + '/video/list').subscribe((data: Array<Object>) => {
      this.videoList = data;
      this.videoList.forEach(elem => elem.show = false);
    });

  }

  showHide($event, day): void {
    let index = this.videoList.findIndex(item => item.day===day);
    if (this.videoList[index].show)
      this.videoList[index].show = false;
      else this.videoList[index].show = true;
    $event.preventDefault();
  }

  ngOnInit() {
    this.getVideoList();
    this.user = this.authService.getUserData();
  }

}
