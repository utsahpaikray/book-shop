import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'master/home', pathMatch: 'full' },
 // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'details', loadChildren: './pages/details/details.module#DetailsPageModule' },
  { path: 'dashboard', loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule' },
  { path: 'master', loadChildren: './pages/master/master.module#MasterPageModule' },
  { path: 'add-to-cart-modal', loadChildren: './shared-component/shared-component/add-to-cart-modal/add-to-cart-modal.module#AddToCartModalPageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
  { path: 'english', loadChildren: './pages/language/english/english.module#EnglishPageModule' },
  { path: 'hindi', loadChildren: './pages/language/hindi/hindi.module#HindiPageModule' },
  { path: 'odia', loadChildren: './pages/language/odia/odia.module#OdiaPageModule' },
  { path: 'language', loadChildren: './pages/language/language/language.module#LanguagePageModule' },
  { path: 'ion-tab', loadChildren: './shared-component/ion-tab/ion-tab.module#IonTabPageModule' },
  { path: 'my-school-list', loadChildren: './pages/school/my-school-list/my-school-list.module#MySchoolListPageModule' },
  { path: 'my-school-details', loadChildren: './pages/school/my-school-details/my-school-details.module#MySchoolDetailsPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'profile', loadChildren: './shared-component/shared-component/profile/profile.module#ProfilePageModule' },
  { path: 'config', loadChildren: './pages/admin/config/config.module#ConfigPageModule' },
  { path: 'inventory', loadChildren: './pages/admin/inventory/inventory.module#InventoryPageModule' },
  { path: 'orders', loadChildren: './pages/admin/orders/orders.module#OrdersPageModule' },
  { path: 'car-rent-services', loadChildren: './pages/rent-services/car-services/car-rent-services/car-rent-services.module#CarRentServicesPageModule' }
  // { path: 'first-with-tabs', loadChildren: './pages/first-with-tabs/first-with-tabs.module#FirstWithTabsPageModule' },
  // { path: 'second', loadChildren: './pages/second/second.module#SecondPageModule' },
 // { path: 'tab1', loadChildren: './pages/tab1/tab1.module#Tab1PageModule' },
 // { path: 'tab2', loadChildren: './pages/tab2/tab2.module#Tab2PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
