import { Persona } from './persona';

export class Usuario extends Persona{

    private email:string;
    private password:string;
    constructor(nombre:string,apellido:string, fecha:string,
                elEmail: string, elPassword: string, foto: string, reputacion: string,
                perfil: string, compra: string, venta:string , seguidores:string){
        super(nombre,apellido,fecha,null,null,null);
        this.email=elEmail;
        this.password=elPassword;
    }

    public obtenerEmail(){
        return this.email;
    }
    public obtenerPass(){
        return this.password;
    }
}

