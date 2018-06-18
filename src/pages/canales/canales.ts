import { Admin } from './../../modelos/usuarios/admin';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { CanalModalPage } from '../canal-modal/canal-modal';

@IonicPage()
@Component({
  selector: 'page-canales',
  templateUrl: 'canales.html',
})
export class CanalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
                public modalCtrl:ModalController) {
  }

  presentModal(){
    let modal = this.modalCtrl.create(CanalModalPage);
     modal.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CanalesPage');
  }

}
