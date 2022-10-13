import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {
  ToastController,
  LoadingController,
} from '@ionic/angular';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit  {

  constructor(
    private storage : Storage,
    private navCtrl : NavController,
    private loadingCtrl: LoadingController,
  ) { 

  }

  //ROUTER LINK(PINDAH TAB) MENGGUNAKAN LOADING
  async waitabs(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 1000
    });
    loading.present();
    this.navCtrl.navigateRoot(['/study']);
  }

  async waitcs(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 1000
    });
    loading.present();
    this.navCtrl.navigateRoot(['/current-students']);
  }
  async waitne(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 1000
    });
    loading.present();
    this.navCtrl.navigateRoot(['/news-and-events']);
  }
  async waitrsrch(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 1000
    });
    loading.present();
    this.navCtrl.navigateRoot(['/research']);
  }
  async waitql(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 1000
    });
    loading.present();
    this.navCtrl.navigateRoot(['/quick-links']);
  }
  async waitos(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 1000
    });
    loading.present();
    this.navCtrl.navigateRoot(['/our-services']);
  }
  async waitas(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 1000
    });
    loading.present();
    this.navCtrl.navigateRoot(['/alumni-and-supporters']);
  }
  async waitaau(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 1000
    });
    loading.present();
    this.navCtrl.navigateRoot(['/about-us']);
  }
  async waitmi(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      duration: 1000
    });
    loading.present();
    this.navCtrl.navigateRoot(['/tabs/tab3']);
  }
  
  ngOnInit() {
    this.storage.clear();
    setTimeout(() => {
      this.logout();
      this.navCtrl.navigateRoot('/welcome');
    }, 150000);
  }

  // autologout(){
  //   this.storage.clear();
  //   setTimeout(() => {
  //     this.logout();
  //     this.navCtrl.navigateRoot('/welcome');
  //   }, 1500);
  // }

  logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot('/welcome');
  }
}
