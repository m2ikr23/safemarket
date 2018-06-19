import { UsuarioServicio } from './../../servicios/usuarios/usuario.service';
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
  constructor(public navCtrl: NavController, public navParams: NavParams,
                public viewCtrl:ViewController, public usuarioServicio:UsuarioServicio) {
  ;
  }

  ionViewDidLoad() {
    this.usuario = this.navParams.get('usuario')
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
  actualizarUsuario(form:NgForm){
    this.usuario.avatar=form.value.foto;
    this.usuario.nombre = form.value.nombre;
    this.usuario.apellido = form.value.apellido;
    this.usuarioServicio.actualizarUsuario(this.usuario)
    console.log(form.value.foto);
  }
}
