import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { VgApiService } from '@videogular/ngx-videogular/core';
// import { PictureInPictureAlt } from '@material-ui/icons';
import {
  faEye,
  faThumbsUp,
  faStar,
  faHeart,
  faList,
  faFastForward,
  faFastBackward,
  faRedo,
  faUndo,
  faBookmark,
  faShare,
} from '@fortawesome/free-solid-svg-icons';
import * as far from '@fortawesome/free-regular-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkModelComponent } from './bookmark-model/bookmark-model.component';

interface VideoElement extends HTMLVideoElement {
  requestPictureInPicture(): any;
}

export interface IMedia {
  title: string;
  src: string;
  type: string;
  vposter: string;
}

export interface BookmarkVideo {
  time: string;
  desc: string;
}

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  providers: [VgApiService],
})
export class VideoComponent implements OnInit {
  faEye = faEye;
  faThumbsUp = faThumbsUp;
  faThumbsUpR = far.faThumbsUp;
  faStarR = far.faStar;
  faStar = faStar;
  faHeart = faHeart;
  faHeartR = far.faHeart;
  faList = faList;
  faFastForward = faFastForward;
  faFastBackward = faFastBackward;
  faRedo = faRedo;
  faUndo = faUndo;
  faBookmark = faBookmark;
  faShare = faShare;
  // fapip = PictureInPictureAlt;

  @ViewChild('media') videoElement: ElementRef;

  async pipr() {
    const video: VideoElement = this.videoElement.nativeElement;
    await video.requestPictureInPicture();
  }

  // ngAfterViewInit() {
  //   const video: VideoElement = this.videoElement.nativeElement;
  //   video.addEventListener('play', async (e) => {
  //     await video.requestPictureInPicture();
  //   });
  // }

  playlist: Array<IMedia> = [
    {
      title: 'Elephants Dream',
      src: 'http://static.videogular.com/assets/videos/elephants-dream.mp4',
      type: 'video/mp4',
      vposter:
        'http://static.videogular.com/assets/videos/elephants-dream.mp4#t=2',
    },
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
      title: 'New one',
      src:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      type: 'video/mp4',
      vposter:
        'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4#t=2',
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

  bookmarksList: Array<BookmarkVideo> = [
    {
      time: '02:10',
      desc: 'Mahima start',
    },
    {
      time: '03:16',
      desc: 'Agna start',
    },
  ];

  currentSpeed = 1;
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
    this.api.volume = 0; //This shold be deleted after development
  }

  handlespeed(newSpeed: number) {
    this.currentSpeed = newSpeed;
    this.api.playbackRate = newSpeed;
  }

  forward10sec(api: VgApiService) {
    if (this.api.currentTime + 10 >= this.api.duration) {
      this.api.seekTime(this.api.duration);
    } else {
      this.api.seekTime(this.api.currentTime + 10);
    }
  }

  backward10sec(api: VgApiService) {
    if (this.api.currentTime - 10 <= 0) {
      this.api.seekTime(0);
    } else {
      this.api.seekTime(this.api.currentTime - 10);
    }
  }

  nextVideo() {
    this.currentIndex++;

    if (this.currentIndex === this.playlist.length) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[this.currentIndex];
  }

  previousVideo() {
    this.currentIndex--;

    if (this.currentIndex <= 0) {
      this.currentIndex = 0;
    }

    this.currentItem = this.playlist[this.currentIndex];
  }

  playVideo() {
    this.api.play();
  }

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  active = 1;

  openBookmarkModel() {
    this.api.pause();
    document.exitFullscreen();
    const modalRef = this.modalService.open(BookmarkModelComponent);
    let currentTi: number = this.api.currentTime;
    modalRef.componentInstance.time = this.NumToTime(currentTi);
  }

  NumToTime(num) {
    // var num2: number = num.toFixed(0);
    var num2: number = Math.floor(num);
    var hours2: number = Math.floor(num2 / 3600);
    var hours: String = hours2.toString();
    if (hours.length < 2) hours = '0' + hours;
    num2 = num2 % 3600;
    var minutes2: number = Math.floor(num2 / 60);
    var minutes: String = minutes2.toString();
    if (minutes.length < 2) minutes = '0' + minutes;
    num2 = num2 % 60;
    var second: String = num2.toString();
    if (second.length < 2) second = '0' + second;

    return hours + ':' + minutes + ':' + second;
  }
}
