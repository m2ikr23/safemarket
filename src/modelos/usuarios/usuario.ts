import { Persona } from './persona';

export class Usuario extends Persona{

    constructor( public email:string, public password:string, public avatar:any,
                public reputacion: number, public seguidores: string[],
                public nombre: string,public apellido: string, 
                public fecha: string, public direccion: string, public telefono:string, public sexo:string, public status:boolean){
        super(nombre,apellido,fecha,direccion,telefono,sexo,status);
     
      
    }

  
}

