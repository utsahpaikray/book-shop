import { ModalController, NavParams, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-viewer',
  templateUrl: './video-viewer.page.html',
  styleUrls: ['./video-viewer.page.scss'],
})
export class VideoViewerPage implements OnInit {

  public id;
  private player;
  private ytEvent;
  Devicewidth: any;
  public playerVars: { 'autoplay': 1, 'controls': 0,'autohide':1,'wmode':'opaque','origin':'http://localhost:8100' };
  constructor(
    platform: Platform,
    private modalController: ModalController,
    private navParams: NavParams,
    private _router: Router
  ) { 
    platform.ready().then((readySource) => {
      this.Devicewidth=  platform.width()*98/100;
      console.log(this.Devicewidth)
    });
  }

  ngOnInit() {
    console.log(this.navParams.data.Data)
    this.id= this.navParams.data.Data
   
  }
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
   // this._router.navigate(['master/cart']);
  }
   
  // playerVars = {
  //   cc_lang_pref: 'en'
  // };

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }
}
