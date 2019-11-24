import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoViewerPage } from './video-viewer.page';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

const routes: Routes = [
  {
    path: '',
    component: VideoViewerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgxYoutubePlayerModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoViewerPage]
})
export class VideoViewerPageModule {}
