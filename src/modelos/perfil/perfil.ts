export class Perfil{
    private id : number;
    private propietario: string;
    private fecha_actualizacion: string;
    private status: string;

   private constructor(laDescripcion:string,laFecha:string){
        
        this.propietario=laDescripcion;
        this.fecha_actualizacion=laFecha;
        this.status="A";     
    }
}