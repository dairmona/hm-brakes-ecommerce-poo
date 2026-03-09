import Usuario from "./Usuario.js"

class Administrador extends Usuario{

gestionarInventario(producto,cantidad){
producto.actualizarStock(cantidad)
console.log("Inventario actualizado")
}

crearPromocion(producto,descuento){
producto.precio=producto.precio-(producto.precio*descuento)
console.log(`Promoción aplicada a ${producto.nombre}`)
}

}

export default Administrador