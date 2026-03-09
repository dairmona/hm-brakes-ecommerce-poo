import Producto from "./Producto.js"

class ProductoDigital extends Producto{

constructor(id,nombre,precio,descripcion,stock,formatoArchivo,tamanoArchivo){
super(id,nombre,precio,descripcion,stock)
this.formatoArchivo=formatoArchivo
this.tamanoArchivo=tamanoArchivo
}

descargarProducto(){
console.log(`Descargando ${this.nombre} en formato ${this.formatoArchivo}`)
}

}

export default ProductoDigital