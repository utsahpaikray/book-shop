import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HeaderColor } from '@ionic-native/header-color/ngx';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private headerColor: HeaderColor,
    private lottieSplashScreen: LottieSplashScreen
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {    
       this.headerColor.tint('#228ae0');
     //  this.statusBar.styleDefault();
       this.statusBar.overlaysWebView(true);
       this.statusBar.backgroundColorByHexString('#228ae0');
       this.splashScreen.show();
       this.lottieSplashScreen.show('www/lottie/animation.json', false, 1024, 768);
    });
  }
}
