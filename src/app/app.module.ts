import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkModelComponent } from './video/bookmark-model/bookmark-model.component';
@NgModule({
  declarations: [AppComponent, VideoComponent, BookmarkModelComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
