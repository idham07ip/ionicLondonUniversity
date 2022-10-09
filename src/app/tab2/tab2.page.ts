import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit  {

  constructor(
    private storage : Storage,
    private navCtrl : NavController
  ) { 

  }

  ngOnInit() {
  }
  logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot('/welcome');
  }
}
