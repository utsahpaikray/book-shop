import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';
//import { IonicRatingModule } from 'ionic4-rating';
import { OdiaPage } from './odia.page';

const routes: Routes = [
  {
    path: '',
    component: OdiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    //IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OdiaPage]
})
export class OdiaPageModule {}
