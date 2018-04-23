import { Persona } from './persona';

export class Admin extends Persona{

    constructor(nombre:string,apellido:string,email:string,password:string){
        super(nombre,apellido,null,null,null,null);
    }
}