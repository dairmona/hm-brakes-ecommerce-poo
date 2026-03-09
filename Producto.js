class Producto {

constructor(id,nombre,precio,descripcion,stock){
this.id=id
this.nombre=nombre
this.precio=precio
this.descripcion=descripcion
this.stock=stock
}

mostrarInformacion(){
console.log(`Producto: ${this.nombre}`)
console.log(`Precio: $${this.precio}`)
console.log(`Stock: ${this.stock}`)
}

actualizarStock(cantidad){
this.stock+=cantidad
}

}

export default Producto