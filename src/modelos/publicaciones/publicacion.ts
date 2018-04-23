export class Publicacion{
    private id : number;
    private producto: string;
    private foto: string;
    private descripcion: string;
    private comentario: string;
    private status: string;

   private constructor(elProducto:string,laFoto:string,
                    lafecha:string,lacomentario:string,elTelefono:string,
                    elSexo:string){
        
        this.producto=elProducto;
        this.foto=laFoto;
        this.descripcion=lafecha;
        this.comentario=lacomentario;
        this.status="A";     
    }
}