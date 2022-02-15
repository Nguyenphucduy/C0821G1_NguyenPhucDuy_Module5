import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import {RouterModule} from '@angular/router';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
