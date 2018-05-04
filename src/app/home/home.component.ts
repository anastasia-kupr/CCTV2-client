import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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
    role: ''
  };

  constructor(private http: HttpClient) {}

  onRecordClick(): any {
    this.recording = true;
    return this.http.get('http://localhost:3000/video/start-record').subscribe();
  }
  onStopRecordClick(): any {
    this.recording = false;
    return this.http.get('http://localhost:3000/video/stop-record').subscribe();
  }

  ngOnInit() {
    this.user = JSON.parse(window.localStorage.getItem('userData'));
    const muteButton = document.getElementById("muteButton");
    let audioTrack;
    audioTrack = document.getElementById("html5_audio");
    // muteButton.innerHTML = '<fa name="volume-off"></fa>';
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
