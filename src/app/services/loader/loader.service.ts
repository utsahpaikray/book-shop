import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor(public loadingController: LoadingController) { }
  public async presentLoading() {
    const loading = await this.loadingController.create({
      spinner:null,
      message: `<div class="custom-spinner-container">
      <img class="loading" width="120px" height="120px" src="assets/loading.gif" />
    </div>`,
      translucent: true,
      cssClass: 'custom-class custom-loading',
    // duration:2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
  public async dismissloading(){
    await this.loadingController.dismiss();
  }
 public async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: `<div class="custom-spinner-container">
      <img class="loading" width="120px" height="120px" src="assets/loading.gif" />
    </div>`,
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    return await loading.present();
  }
}
