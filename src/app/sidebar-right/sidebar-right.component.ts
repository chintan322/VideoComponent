import { Component, OnInit } from '@angular/core';
import { faMusic, faVideo, faBook } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.scss'],
})
export class SidebarRightComponent implements OnInit {
  faMusic = faMusic;
  faVideo = faVideo;
  faBook = faBook;
  constructor() {}

  ngOnInit(): void {}
}
