import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/material.module';
import { MatStepperModule } from '@angular/material';
import { AddToCartModalPageModule } from '../app/shared-component/shared-component/add-to-cart-modal/add-to-cart-modal.module';
import { ProfilePageModule } from '../app/shared-component/shared-component/profile/profile.module'
import { IonTabPageModule } from '../app/shared-component/ion-tab/ion-tab.module';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { Vibration } from '@ionic-native/vibration/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
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
    ProfilePageModule,
    IonTabPageModule
  ],
  providers: [
    Camera,
    HeaderColor,
    Vibration,
    StatusBar,
    SplashScreen,
    DocumentViewer,
    File,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
