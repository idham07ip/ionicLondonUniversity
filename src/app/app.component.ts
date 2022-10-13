import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  async ngOnInit(){
    await this.storage.create();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.create();
    this.storage.get('isLoggedIn').then((val) => {
      if (val == null || val == undefined || val == ''){
        this.navCtrl.navigateRoot('/welcome');
      } else {
        this.navCtrl.navigateRoot('/tabs/tab2');
      }
    });
  }
}
