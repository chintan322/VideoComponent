import { Component, VERSION } from '@angular/core';
// import buildInfo from './../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  version = VERSION.full;
  // appversion: string = buildInfo.version;

  ngclass = 'mat-video-responsive';

  src = 'assets/NASA.mp4';
  title = 'NASA video';
  width = 600;
  height = 337.5;
  currentTime = 0;
  autoplay = false;
  preload = true;
  loop = false;
  quality = true;
  download = true;
  fullscreen = false;
  playsinline = false;
  showFrameByFrame = false;
  keyboard = true;
  color = 'primary';
  spinner = 'spin';
  poster = 'assets/NASA.jpg';
  overlay = null;
  muted = false;
}

// import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
// import { MatVideoComponent } from 'mat-video/lib/video.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   @ViewChild('video') matVideo: MatVideoComponent;
//   video: HTMLVideoElement;

//   constructor(private renderer: Renderer2) {}

//   ngOnInit(): void {
//     this.video = this.matVideo.getVideoTag();

//     // Use Angular renderer or addEventListener to listen for standard HTML5 video events

//     this.renderer.listen(this.video, 'ended', () => console.log('video ended'));
//     this.video.addEventListener('ended', () => console.log('video ended'));
//   }
// }
