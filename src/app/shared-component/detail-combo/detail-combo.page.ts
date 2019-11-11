import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-detail-combo',
  templateUrl: './detail-combo.page.html',
  styleUrls: ['./detail-combo.page.scss']
})
export class DetailComboPage implements OnInit {

  
  modalTitle:string;
  model:any;
  index: any;
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(
    private modalController: ModalController,
    private navParams: NavParams,
    private _router: Router,
    private sms: SMS
  ) { }
 
  ngOnInit() {
    this.model = this.navParams.data.Data;
    console.log(this.sms)
    this.sms.send('7377647878', 'Hello world!');
  //  console.log(this.model)
  }
 
  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
   // this._router.navigate(['master/cart']);
  }
  ngAfterViewInit() {
  }

}










 
