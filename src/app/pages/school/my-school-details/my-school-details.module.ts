import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MySchoolDetailsPage } from './my-school-details.page';

const routes: Routes = [
  {
    path: '',
    component: MySchoolDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MySchoolDetailsPage]
})
export class MySchoolDetailsPageModule {}
