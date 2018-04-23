import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html',
})
export class WallPage {
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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WallPage');
  }

}
