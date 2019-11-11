import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CelebrationPage } from './celebration.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'birthday',
        loadChildren: '../birthday/birthday.module#BirthdayPageModule'
      },
      {
        path: 'celebration-combos',
        loadChildren: '../celebration-combo/celebration-combo.module#CelebrationComboPageModule'
      },
      {
        path: 'anniversary',
        loadChildren: '../anniversary/anniversary.module#AnniversaryPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CelebrationPage]
})
export class CelebrationPageModule {}
