import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(public toastController: ToastController) { }
  public async presentToast(mesaage?:string,position?, color?:string, buttonmsg:string='Done') {
  //  console.log(color);
    const toast = await this.toastController.create({
      message: mesaage,
    //  duration: 2000,
      position: position,
      color:color,
      buttons: [
        {
          side: 'start',
          icon: buttonmsg,
        //  text: buttonmsg,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
         {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
           console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }

  public async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
