import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddToCartModalPage } from './add-to-cart-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddToCartModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddToCartModalPage]
})
export class AddToCartModalPageModule {}
