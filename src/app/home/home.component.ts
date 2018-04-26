import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    const muteButton = document.getElementById("muteButton");
    let audioTrack;
    audioTrack = document.getElementById("html5_audio");
    muteButton.textContent = "Mute";
    muteButton.addEventListener("click", muter);
    function muter() {
      if (audioTrack.volume == 0) {
        muteButton.textContent = "Mute";
        audioTrack.volume = 1;
        volumeSlider.value = 1;
      } else {
        muteButton.textContent = "Unmute";
        audioTrack.volume = 0;
        volumeSlider.value = 0;
      }
    }
    let volumeSlider;
    volumeSlider = document.getElementById("volumeSlider");
    volumeSlider.addEventListener("input", function () {audioTrack.volume = volumeSlider.value;});
  }

}
