import Usuario from "./Usuario.js"

class Cliente extends Usuario{

constructor(id,nombre,email,password){
super(id,nombre,email,password)
this.historialCompras=[]
this.preferencias=[]
}

agregarCompra(producto){
this.historialCompras.push(producto)
}

verHistorial(){
console.log("Historial de compras:")
console.log(this.historialCompras)
}

}

export default Cliente