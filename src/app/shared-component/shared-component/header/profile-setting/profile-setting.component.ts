import { Component, OnInit, Renderer, ChangeDetectorRef } from '@angular/core';

import { ProfilePage } from '../../profile/profile.page';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.component.html',
  styleUrls: ['./profile-setting.component.scss'],
})
export class ProfileSettingComponent implements OnInit {
public theme: boolean=false;
  dataReturned: any;
  constructor(private renderer: Renderer, private cdr: ChangeDetectorRef, public modalController: ModalController, public navCtrl: NavController, private httpClient: HttpClient, private authors: DashboardService, private popoverController: PopoverController) {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.theme = document.body.classList.contains("dark");
    this.cdr.detectChanges();
  }
  public toggleTheme() {
    this.theme=this.theme?true:false;
    this.renderer.setElementClass(document.body, 'dark', this.theme?true:false);
  }
  public async openProfile() {
    const modal = await this.modalController.create({
      component: ProfilePage,
      componentProps: {
      }
    });

    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
      }
    });
    this.dismissProfile();
    return await modal.present();
}
  public async dismissProfile() {
    await this.popoverController.dismiss();
  }
}
