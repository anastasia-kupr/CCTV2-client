import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) {}

  id = '';

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
