import { from } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ServiceWorkerModule } from '@angular/service-worker';
import { DetailComboPageModule } from './shared-component/detail-combo/detail-combo.module';
import { PdfViewerPageModule } from './shared-component/pdf-viewer/pdf-viewer.module';
import { VideoViewerPageModule } from './shared-component/video-viewer/video-viewer.module';
//import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer'; 
//import { File } from '@ionic-native/file';

// Interceptors
import { TokenInterceptor } from './Interceptors/auth.interceptor';
import { ErrorHandlerService} from './services/error-handler-service/error-handler.service';
import { HelperService } from './services/helper-service/helper.service';
import { ToasterService} from './services/toaster/toaster.service';

//Auth Services
import { AuthenticationService } from './services/authentication-service/authentication.service';
import { IonicStorageModule } from '@ionic/storage';
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { LoginPageModule } from './pages/login/login.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    MatStepperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(
      {swipeBackEnabled: false}
    ),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    BrowserAnimationsModule,
    AddToCartModalPageModule,
    LoginPageModule,
    DetailComboPageModule,
    ProfilePageModule,
    IonTabPageModule,
    PdfViewerPageModule,
    VideoViewerPageModule,
    NgxYoutubePlayerModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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
    FileOpener,
    FileTransfer,
    FileTransferObject,
    ErrorHandlerService,
    HelperService,
    ToasterService,
    AuthenticationService,
  //  YoutubeVideoPlayer,
   // File,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
