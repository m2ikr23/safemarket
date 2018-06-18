import { Usuario } from './../../modelos/usuarios/usuario';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-update-user',
  templateUrl: 'update-user.html',
})
export class UpdateUserPage {
usuario:Usuario;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController) {
  this.usuario = navParams.get('usuario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateUserPage');
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  actualizarUsuario(form:NgForm){
    this.usuario.foto=form.value.foto;
    console.log(form.value.foto);
  }
}
