import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from './../login/login';
import { RegistroPage } from './../registro/registro';
import { UsuarioServicio } from '../../servicios/usuarios/usuario.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController,public usuarioServicio:UsuarioServicio) {
    this.pages = [
      { title: 'Registro', component: RegistroPage },
      { title: 'Inicio de sesión', component: LoginPage},
    ];
  }

  ionViewDidLoad() {
    this.usuarioServicio.getUsuarios()
         .subscribe(
           (data:any[])=>{

           this.usuarioServicio.cargarUsuarios(data);
         },
         (error)=>{
           console.error(error);
         }
       );
   
 
   }
signup(){
  this.navCtrl.push(RegistroPage);
  }

login(){
  this.navCtrl.push(LoginPage);
  }

openPage(page){
  this.navCtrl.push(page);
  }
}
