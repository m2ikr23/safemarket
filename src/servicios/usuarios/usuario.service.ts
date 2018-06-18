
import { Injectable } from "@angular/core";
import  { HttpClient } from '@angular/common/http'
import { Usuario } from "../../modelos/usuarios/usuario";

@Injectable()
export class UsuarioServicio{
     usuarios:any[] = [];
     urlapi= 'http://127.0.0.1:8000/usuarios/';
   
     constructor(public httpcli:HttpClient){
    
    }
  

    traerUsuarios(data:any[]){
        this.usuarios=data;
    }

    getUsuarios(){
        return this.httpcli.get(this.urlapi);
    }

    setUsuarios(data){
        return new Promise((resolve, reject) => {
          this.httpcli.post(this.urlapi, data)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
        });
      }

    agregarUsuario(nombre: string, apellido: string,
        fecha: string, email: string, password: string) {

        let seguidores = [
            this.urlapi+"/1/",
        ]
        let usuario = new Usuario(email, password, null, null, seguidores,
            nombre, apellido, fecha, null, null, null, true);

        this.setUsuarios(usuario).then(inf => {
            console.log(inf);
            this.usuarios.push(inf);
        }).catch(error => {
            console.log(error);
        });
    }

  
    cargarUsuarios(data:any[]){
        this.usuarios=data;
    }

    loginUser(email:string, password:string){
        let usuario:any;
        for(let i=0; i<this.usuarios.length;i++){
            if (email===this.usuarios[i].email && password===this.usuarios[i].password ) {
            usuario = this.usuarios[i];
            }
          }
          return usuario;
    }

    actualizarUsuario(){
        
    }
}