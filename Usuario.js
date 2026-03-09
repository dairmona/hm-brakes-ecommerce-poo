class Usuario{

constructor(id,nombre,email,password){
this.id=id
this.nombre=nombre
this.email=email
this.password=password
}

iniciarSesion(){
console.log(`${this.nombre} ha iniciado sesión`)
}

cerrarSesion(){
console.log(`${this.nombre} cerró sesión`)
}

}

export default Usuario