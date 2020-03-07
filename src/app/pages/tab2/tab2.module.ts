import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Tab2Page } from './tab2.page';
//import { IonicRatingModule } from 'ionic4-rating';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
 //   IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
