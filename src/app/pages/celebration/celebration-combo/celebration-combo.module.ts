import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CelebrationComboPage } from './celebration-combo.page';

const routes: Routes = [
  {
    path: '',
    component: CelebrationComboPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CelebrationComboPage]
})
export class CelebrationComboPageModule {}
