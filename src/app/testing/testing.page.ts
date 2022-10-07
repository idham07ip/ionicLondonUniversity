import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage implements OnInit {

  constructor(private modalController: ModalController) { }
  dismiss(){
    this.modalController.dismiss();
  }

  ngOnInit() {
  }

}
