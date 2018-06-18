import { Usuario } from './../../modelos/usuarios/usuario';
import { WallPage } from './../wall/wall';
import { NgForm } from '@angular/forms';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { UsuarioServicio } from './../../servicios/usuarios/usuario.service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public usuarioServicio:UsuarioServicio) {
  }

  ionViewDidLoad() {
    console.log(this.usuarioServicio.usuarios);

  }

  login(formLogin:NgForm){
    let email=formLogin.value.email;
    let password=formLogin.value.password;
    this.usuario=this.usuarioServicio.loginUser(email,password);
    console.log("el email es:"+this.usuario.email)
    
    if (this.usuario) {
      this.aviso("ha iniciado sesion como "+ this.usuario.email);
      this.navCtrl.insert(0,WallPage,{'usuario':this.usuario});
      this.navCtrl.popToRoot();
    } else {
      this.aviso("Usuario no registrado");
    }
    }

aviso(elmensaje:string){
let toast=this.toastCtrl.create({
  message:elmensaje,
  duration:3000
});
toast.present();
}
}
