
export class Comentario{
    private id : number;
    private contenido: string;
    private remitente: string;
    private status: string;

   private constructor(elContenido:string,elRemitente:string){
        
        this.contenido=elContenido;
        this.remitente=elRemitente;
        this.status="A";     
    }
}