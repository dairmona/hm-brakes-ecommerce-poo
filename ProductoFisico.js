import Producto from "./Producto.js"

class ProductoFisico extends Producto{

constructor(id,nombre,precio,descripcion,stock,peso,dimensiones){
super(id,nombre,precio,descripcion,stock)
this.peso=peso
this.dimensiones=dimensiones
}

calcularCostoEnvio(){
return this.peso*5000
}

}

export default ProductoFisico