import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from '../../../app/shared-component/shared-component/header/profile/profile.component';
import { CartCountComponent } from '../../../app/shared-component/shared-component/header/cart-count/cart-count.component';
import {ProfileSettingComponent } from '../../shared-component/shared-component/header/profile-setting/profile-setting.component';

import { MasterPage } from './master.page';

const routes: Routes = [
  {
    path: '',
    component: MasterPage,
    children: [
      {
        path: 'home',
        loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
      },
      {
        path: 'books',
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'authors',
        loadChildren: '../tab2/tab2.module#Tab2PageModule'
      },
      {
        path: 'cart',
        loadChildren: '../cart/cart.module#CartPageModule'
      },
      {
        path: 'news',
        loadChildren: '../news/news.module#NewsPageModule'
      },
      {
        path: 'language',
        loadChildren: '../language/language/language.module#LanguagePageModule'
      },
      {
        path: 'my-school',
        loadChildren: '../school/my-school-list/my-school-list.module#MySchoolListPageModule'
      },
      {
        path: 'my-school/details',
        loadChildren: '../school/my-school-details/my-school-details.module#MySchoolDetailsPageModule'
      },
      {
        path: 'tab1/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'tab2/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/master/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MasterPage,
    ProfileComponent,
    CartCountComponent,
    ProfileSettingComponent
  ],
  entryComponents: [ProfileSettingComponent]
})
export class MasterPageModule {}
