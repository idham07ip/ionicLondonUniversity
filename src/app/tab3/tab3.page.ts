import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page{

  constructor(
    private storage : Storage,
    private navCtrl : NavController
  ) { }

  ngOnInit() {
  }
  logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot('/welcome');
  }
}
