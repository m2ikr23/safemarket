import { Usuario } from './../../modelos/usuarios/usuario';
import { Injectable } from "@angular/core";

@Injectable()
export class UsuarioServicio{

    usuarios:Usuario[] = [];
    agregarRestaurante(nombre:string,apellido:string,
                        fecha:string,email:string,password:string){
        let usuario=new Usuario(nombre,apellido,fecha,email,password,
                                    null,null,null,null,null,null);

        this.usuarios.push(usuario);
    }

    cargarUsuarios(){
        return this.usuarios.slice();
    }
}