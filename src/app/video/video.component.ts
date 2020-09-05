import { Component, OnInit } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
// import { VgAPI } from '@videogular/ngx-videogular/core';

export interface IMedia {
  title: string;
  src: string;
  type: string;
  vposter: string;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [VgApiService],
})
export class VideoComponent implements OnInit {
  playlist: Array<IMedia> = [
    {
      title: 'Pale Blue Dot',
      src: 'http://static.videogular.com/assets/videos/videogular.mp4',
      type: 'video/mp4',
      vposter: 'http://static.videogular.com/assets/videos/videogular.mp4#t=2',
    },
    {
      title: 'Big Buck Bunny',
      src:
        'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov',
      type: 'video/mp4',
      vposter:
        'http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov#t=2',
    },
    {
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4',
      vposter:
        'http://static.videogular.com/assets/videos/elephants-dream.mp4#t=2',
    },
    {
      title: 'New one',
      src:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      type: 'video/mp4',
      vposter:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4#t=2',
    },
  ];

  currentIndex = 0;
  currentItem: IMedia = this.playlist[this.currentIndex];

  onClickPlaylistItem(item: IMedia) {
    this.currentItem = item;
  }

  api: VgApiService;
  onPlayerReady(api: VgApiService) {
    this.api = api;
    this.api
      .getDefaultMedia()
      .subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    this.api
      .getDefaultMedia()
      .subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[this.currentIndex];
  }

  playVideo() {
    this.api.play();
  }

  constructor() {}

  ngOnInit(): void {}
}
