import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnglishPage } from './english.page';
import { HttpClientModule } from '@angular/common/http';
import { IonicRatingModule } from 'ionic4-rating';
const routes: Routes = [
  {
    path: '',
    component: EnglishPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    IonicRatingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnglishPage]
})
export class EnglishPageModule {}
