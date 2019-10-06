import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  modalTitle:string;
  modelId:number;
  index: any;
  profiledata: { Name: string; profileImage: string; email: string; mobile: string; }[];


  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _router: Router
  ) { }
 
  ngOnInit() {
    this.modelId = this.navParams.data.Name;
    this.modalTitle = this.navParams.data.paramTitle;
    this.index = this.navParams.data.index;
    this.profiledata=[
      {
        Name:'Utsah Paikray',
        profileImage:'assets/pic1.png',
        email:'utsahpaikray@gmail.com',
        mobile:'+91-7377647878'
      }
    ];
  }
 
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  //  this._router.navigate(['master/cart']);
  }
  ngAfterViewInit() {
   //this.goToSlide(1);
  }
}









 