import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {CONFIG} from '../../../../config';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recording: boolean = false;
  user = {
    username: '',
    role: '',
    uuid: '',
    password: ''
  };

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  onRecordClick(): any {
    this.recording = true;
    return this.http.get(CONFIG.serverURL + '/video/start-record').subscribe();
  }
  onStopRecordClick(): any {
    this.recording = false;
    return this.http.get(CONFIG.serverURL + '/video/stop-record').subscribe();
  }

  ngOnInit() {
    if (this.authService.getUserData()) this.user = this.authService.getUserData();

    this.http.get(CONFIG.serverURL + '/users/').subscribe();

    const muteButton = document.getElementById("muteButton");
    let audioTrack;
    audioTrack = document.getElementById("html5_audio");
    muteButton.addEventListener("click", muter);
    function muter() {
      if (audioTrack.volume == 0) {
        audioTrack.volume = 1;
        volumeSlider.value = 1;
      } else {
        audioTrack.volume = 0;
        volumeSlider.value = 0;
      }
      $('#offBtn').toggleClass('hide');
      $('#onBtn').toggleClass('hide');
    }
    let volumeSlider;
    volumeSlider = document.getElementById("volumeSlider");
    volumeSlider.addEventListener("input", function () {audioTrack.volume = volumeSlider.value;});
  }

}
