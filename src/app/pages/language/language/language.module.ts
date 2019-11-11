import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LanguagePage } from './language.page';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'books',
        loadChildren: '../english/english.module#EnglishPageModule'
      },
      {
        path: 'odia',
        loadChildren: '../odia/odia.module#OdiaPageModule'
      },
      {
        path: 'accesories',
        loadChildren: '../hindi/hindi.module#HindiPageModule'
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
  declarations: [LanguagePage]
})
export class LanguagePageModule {}
