export class Producto{
    private id : number;
    private descripcion: string;
    private precio: number;
    private cantidad: number;
    private calificacion: number;
    private foto: string;
    private categoria:string;
    private status: string;

   private constructor(laDescripcion:string,elPrecio:number,
                    laCantidad:number,laCalificacion:number,laFoto:string,
                    laCategoria:string){
        
        this.descripcion=laDescripcion;
        this.precio=elPrecio;
        this.cantidad=laCantidad;
        this.calificacion=laCalificacion;
        this.foto=laFoto;
        this.categoria= laCategoria;
        this.status="A";     
    }
}