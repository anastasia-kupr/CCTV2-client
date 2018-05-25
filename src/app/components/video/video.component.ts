import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CONFIG} from '../../../../config';

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

  serverURL = CONFIG.serverURL;

  id = '';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.http.get(CONFIG.serverURL + '/users/').subscribe();
  }

}
