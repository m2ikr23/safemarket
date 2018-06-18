

import { UsuarioServicio } from './../../servicios/usuarios/usuario.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { Usuario } from './../../modelos/usuarios/usuario';



@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  datos = {
    nombre: "maiker",
    apellido: "gutierrez",
    fecha: "23/01/1992",
    email: "m2ikr23@gmail.com",
    password: "m2iker21503"
  }

  usuarios: Usuario[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioServicio: UsuarioServicio) {
  }


  agregarUsuario(formRegistro: NgForm) {
    console.log(this.usuarios);
    this.usuarioServicio.agregarUsuario(formRegistro.value.nombre, formRegistro.value.apellido,
    formRegistro.value.fecha, formRegistro.value.email, formRegistro.value.password);
    this.navCtrl.pop();
  }

}
