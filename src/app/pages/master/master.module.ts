import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule } from '@ionic/angular';

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
  declarations: [MasterPage]
})
export class MasterPageModule {}
