import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigPage } from './config.page';
import { AddUserComponent } from '../sharedComponents/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    component: ConfigPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
     MatTableModule,
     MatBottomSheetModule,
     MatInputModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ConfigPage,
    AddUserComponent],
    entryComponents:[AddUserComponent]
})
export class ConfigPageModule {}
