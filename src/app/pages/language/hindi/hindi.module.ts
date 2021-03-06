import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HindiPage } from './hindi.page';
import { HttpClientModule } from '@angular/common/http';
// import { IonicRatingModule } from 'ionic4-rating';

const routes: Routes = [
  {
    path: '',
    component: HindiPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
 //   IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HindiPage]
})
export class HindiPageModule {}
