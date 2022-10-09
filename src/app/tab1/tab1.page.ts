import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page{

  public name: string;
  public photo: string;
  public qr: string;

  constructor(
    private storage : Storage,
    private navCtrl : NavController
  ) {}
  ngOnInit(): void{
    this.storage.get('isLoggedIn').then((val) => {
      console.log(val);
      this.name = val.nama;
      this.photo = `https://apimobprog.adistiradyiputra.my.id/foto/${val.foto}`;
      this.qr = `https://apimobprog.adistiradyiputra.my.id/qrcode/${val.qrcode}`;
    });  
  }

  logout(){
    this.storage.clear();
    this.navCtrl.navigateRoot('/welcome');
  }
}
