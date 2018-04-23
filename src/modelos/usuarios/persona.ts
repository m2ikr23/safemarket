
export class Persona{
    protected id : number;
    protected nombre: string;
    protected apellido: string;
    protected fechaNacimiento: string;
    protected direccion: string;
    protected telefono: string;
    protected sexo: string;
    protected status: string;

   protected constructor(elNombre:string,elApellido:string,
                    lafecha:string,laDireccion:string,elTelefono:string,
                    elSexo:string){
        
        this.nombre=elNombre;
        this.apellido=elApellido;
        this.fechaNacimiento=lafecha;
        this.direccion=laDireccion;
        this.telefono=elTelefono;
        this.sexo=elSexo;
        this.status="A";     
    }
}