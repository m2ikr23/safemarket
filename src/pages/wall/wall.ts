import { CanalesPage } from './../canales/canales';
import { PerfilPage } from './../perfil/perfil';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../modelos/usuarios/usuario';


@IonicPage()
@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html',
})
export class WallPage {

  pages: Array<{title: string, component: any}>;
  usuario:Usuario;
  like=false;
  
comentarios:Array<any>=[
  {comentarios1:"comentario1"},
  {comentarios1:"comentario2"}, 
  {comentarios1:"comentario3"},
  {comentarios1:"comentario4"},
  {comentarios1:"comentario5"},
]

 publicaciones:Array<any>=[
   {id:1,prducto:"TV HD sansung",foto:"p1",descripcion:"Tv HD 32 pulgadas como nuevo buen precio"},
   {id:2,prducto:"TV HD sansung",foto:"p2",descripcion:"Tv HD 32 pulgadas como nuevo buen precio"},
   {id:3,prducto:"TV HD sansung",foto:"p3",descripcion:"Tv HD 32 pulgadas como nuevo buen precio"},
   {id:4,prducto:"TV HD sansung",foto:"p4",descripcion:"Tv HD 32 pulgadas como nuevo buen precio"},
   {id:5,prducto:"TV HD sansung",foto:"p5",descripcion:"Tv HD 32 pulgadas como nuevo buen precio"},
   {id:6,prducto:"TV HD sansung",foto:"p6",descripcion:"Tv HD 32 pulgadas como nuevo buen precio"},
   {id:7,prducto:"TV HD sansung",foto:"p7",descripcion:"Tv HD 32 pulgadas como nuevo buen precio"},
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.usuario=navParams.get('usuario'); 

   this.pages = [
    { title: this.usuario.nombre, component: PerfilPage},
    { title: 'Registro', component: WallPage },
    { title: 'Canales', component: CanalesPage},
  ];
  }

  ionViewDidLoad() {
    console.log(this.usuario);
  }

  likes(){
    if(this.like){
      this.like=false;
    }else{
     this.like=true 
    }
    
  }

  getLike(){
    if(this.like){

      return "primary";

    }else{
      return "grey";
    }
    
  }

  openPage(page){
    this.navCtrl.push(page,{'usuario':this.usuario});
    }
}
