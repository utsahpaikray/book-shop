import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module';
import { MatStepperModule } from '@angular/material';
import { AddToCartModalPageModule } from '../app/shared-component/shared-component/add-to-cart-modal/add-to-cart-modal.module';
import { IonTabPageModule } from '../app/shared-component/ion-tab/ion-tab.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    MatStepperModule,
    IonicModule.forRoot(
      {swipeBackEnabled: false}
    ),
    AppRoutingModule,
    BrowserAnimationsModule,
    AddToCartModalPageModule,
    IonTabPageModule
  ],
  providers: [
    Camera,
    HeaderColor,
    Vibration,
    StatusBar,
    SplashScreen,
    LottieSplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
