import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {
  NavController,
  ToastController,
  LoadingController,
} from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public results: any;
  public email: string = '';
  public password: string = '';
  constructor(
    public modalCtrl: ModalController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private http: HttpClient,
    private StatusBar: StatusBar,

  ) { }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
  

  async presentToast(a) {
    const toast = await this.toastCtrl.create({
      message: a,
      
      color: 'danger',
      position: 'top',
    });
    toast.present();
  }
 
  async login(input) {
    if (this.email === '') {
      this.presentToast('email cannot be empty!');
    } else if (this.password === '') {
      this.presentToast('Password cannot be empty');
    } else {
      const loader = await this.loadingCtrl.create({
        message: 'Please wait...',
      });
      loader.present();
      const data = {
        email: this.email,
        password: this.password,
      };
      const header = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Accept: 'application/json',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'Content-Type': 'application/json',
      };

      try {
        const storage = await this.storage.create();
        let data: Observable<any>;
        this.password = input;
        const loading = await this.loadingCtrl.create({
          message: 'Loading...',
        });

        if (this.email === null && this.password === null) {
        this.presentToast('Data tidak boleh ada yang kosong');
        } else {
        await loading.present();
        data = this.http.get(
        'https://apimobprog.adistiradyiputra.my.id/api/login/' +
          this.email +
          '/' +
          this.password
        );
        data
        .pipe(
          finalize(() => {
            loading.dismiss();
          })
        )
        .subscribe( async ( result) => {
          this.results = result;
          if (this.results.status === 'ok') {
            // this.router.navigate(['tabs/tab1', {data: this.input_b}]);
            await this.storage.set('isLoggedIn', this.results.result[0]);
                    // storage.set('isLoggedIn', res.result);
                    localStorage.setItem('isLoggedIn', this.results.result[0]);
                    loader.dismiss();
                    await this.dismiss();
            this.email = null;
            this.navCtrl.navigateRoot(['tabs/tab1']);
            this.password = null;
            console.log(this.results)
          } else {
            loader.dismiss();
            this.presentToast('Please Check Email and Password correctly');
          }
        });  }
      } catch (err) {
          loader.dismiss();
          this.presentToast('Something went wrong!');
        }
      }
      }
      
    }
