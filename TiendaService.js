class TiendaService{

constructor(){
this.productos=[]
}

agregarProducto(producto){
this.productos.push(producto)
}

listarProductos(){
this.productos.forEach(p=>{
p.mostrarInformacion()
})
}

}

export default TiendaService