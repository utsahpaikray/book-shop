import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { IonicModule } from '@ionic/angular';

import { MySchoolListPage } from './my-school-list.page';

const routes: Routes = [
  {
    path: '',
    component: MySchoolListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MySchoolListPage]
})
export class MySchoolListPageModule {}
