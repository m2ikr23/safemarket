export class Categoria{
    private id : number;
    private descripcion: string;
    private productos: string;
    private status: string;

   private constructor(laDescripcion:string,elProducto:string,
){
        
        this.descripcion=laDescripcion;
        this.productos=elProducto;
        this.status="A";     
    }
}