import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import {registerWebPlugin} from "@capacitor/core";
import {SmsManager} from '@byteowls/capacitor-sms';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
   // private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private headerColor: HeaderColor
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {    
       this.headerColor.tint('#480f35');
       this.statusBar.styleDefault();
       this.statusBar.overlaysWebView(true);
       this.statusBar.backgroundColorByHexString('#480f35');
       SplashScreen.show({
        showDuration: 2000,
        autoHide: true
      });
    //   this.splashScreen.show();
    });
  }
}
