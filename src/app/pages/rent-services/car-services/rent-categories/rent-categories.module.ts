import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { IonicModule } from '@ionic/angular';

import { RentCategoriesPage } from './rent-categories.page';
import { TravelSubCategoryComponent } from '../../shared-component/travel-sub-category/travel-sub-category.component';

const routes: Routes = [
  {
    path: '',
    component: RentCategoriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatBottomSheetModule,
    RouterModule.forChild(routes)
  ],
  entryComponents:[TravelSubCategoryComponent],
  declarations: [RentCategoriesPage,TravelSubCategoryComponent]
})
export class RentCategoriesPageModule {}
