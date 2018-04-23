export class Comentario{
    private id : number;
    private contenido: string;
    private status: string;

   private constructor(elContenido:string){
        
        this.contenido=elContenido;
        this.status="A";     
    }
}