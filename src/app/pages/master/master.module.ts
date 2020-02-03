import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from '../../../app/shared-component/shared-component/header/profile/profile.component';
import { CartCountComponent } from '../../../app/shared-component/shared-component/header/cart-count/cart-count.component';
import {ProfileSettingComponent } from '../../shared-component/shared-component/header/profile-setting/profile-setting.component';
import { HeaderComponent } from '../../shared-component/shared-component/header/header/header/header.component';


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
        path: 'authors',
        loadChildren: '../tab1/tab1.module#Tab1PageModule'
      },
      {
        path: 'books',
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
        path: 'bookstore',
        loadChildren: '../language/language/language.module#LanguagePageModule'
      },
      {
        path: 'celebration',
        loadChildren: '../celebration/celebration/celebration.module#CelebrationPageModule'
      },
      {
        path: 'story-board',
        loadChildren: '../story-board/story-board.module#StoryBoardPageModule'
      },
      {
        path: 'my-school',
        loadChildren: '../school/my-school-list/my-school-list.module#MySchoolListPageModule'
      },
      {
        path: 'my-school/details/:id',
        loadChildren: '../school/my-school-details/my-school-details.module#MySchoolDetailsPageModule'
      },
      {
        path: 'tab1/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'tab2/details',
        loadChildren: '../details/details.module#DetailsPageModule'
      },
      {
        path: 'admin/configuration',
        loadChildren: '../admin/config/config.module#ConfigPageModule'
      },
      {
        path: 'admin/inventory',
        loadChildren: '../admin/inventory/inventory.module#InventoryPageModule'
      },
      {
        path: 'admin/orders',
        loadChildren: '../admin/orders/orders.module#OrdersPageModule'
      },
      {
        path: 'admin/users',
        loadChildren: '../admin/user/user.module#UserPageModule'
      },
      {
        path: 'rent-service/car-service',
        loadChildren: '../rent-services/car-services/car-rent-services/car-rent-services.module#CarRentServicesPageModule'
      },
      {
        path: 'rent-service/service',
        loadChildren: '../rent-services/car-services/rent-categories/rent-categories.module#RentCategoriesPageModule'
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
    ProfileSettingComponent,
    HeaderComponent
  ],
  entryComponents: [ProfileSettingComponent]
})
export class MasterPageModule {}
