//Destructuring  a dos o mas objetos
const producto = {
    nombre:"tablet",
    precio: 1000,
    disponible:true
}

const cliente ={
    nombre:"Job",
    premiun:true,
    direccion:{
        calle : "Av. Juan XXIII",
    }
}
const {nombre} =producto
const {nombre: nombreCliente}=cliente
const {direccion: {calle}}=cliente
console.log(nombre);
console.log(nombreCliente);
console.log(calle);



