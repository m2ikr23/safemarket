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
  datos={
    email:"",
    password:""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public usuarioServicio:UsuarioServicio) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(formLogin:NgForm){
    this.datos.email=formLogin.value.email;
    this.datos.password=formLogin.value.password;
    let usuarios=this.usuarioServicio.cargarUsuarios().slice();
    let validar=false;
  console.log("el email es:"+this.datos.email)
  
  for(let i=0; i<usuarios.length;i++){
    if (this.datos.email===usuarios[i].obtenerEmail() && this.datos.password===usuarios[i].obtenerPass() ) {
    validar=true;
    }
  }
if (validar) {
  this.aviso("ha iniciado sesion como "+ this.datos.email);
  this.navCtrl.insert(0,WallPage);
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
