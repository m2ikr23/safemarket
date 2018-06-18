import { Usuario } from './../../modelos/usuarios/usuario';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { UpdateUserPage } from '../update-user/update-user';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario:Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public modalCtrl:ModalController) {
    this.usuario=navParams.get('usuario');
  }

  ionViewDidLoad() {
    console.log(this.usuario);
  }

  presentModal(){
    let modal= this.modalCtrl.create(UpdateUserPage,{'usuario':this.usuario});
    modal.present();
  }
}
