import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SMS } from '@ionic-native/sms/ngx';
import { IonicModule } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { DetailComboPage } from './detail-combo.page';
import { Plugins } from '@capacitor/core';
const routes: Routes = [
  {
    path: '',
    component: DetailComboPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers:[SMS],
  declarations: [DetailComboPage]
})
export class DetailComboPageModule {}
