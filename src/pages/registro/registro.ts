

import { UsuarioServicio } from './../../servicios/usuarios/usuario.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
datos ={
  nombre: "maiker",
  apellido:"gutierrez",
  fecha:"23/01/1992",
  email:"m2ikr23@gmail.com",
  password:"m2iker21503"
}
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public usuarioServicio:UsuarioServicio ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

  agregarUsuario(formRegistro:NgForm){
    this.usuarioServicio.agregarRestaurante(formRegistro.value.nombre ,formRegistro.value.apellido,
                                                  formRegistro.value.fecha,formRegistro.value.email,formRegistro.value.password)
     var lista =this.usuarioServicio.cargarUsuarios();
      for(let list of lista){
        console.log(list);
      }
      this.navCtrl.pop();
                                                  }
}
