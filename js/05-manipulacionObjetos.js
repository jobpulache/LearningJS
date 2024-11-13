//nanipulación de objetos
const producto ={
    nombre : "tablet",
    precio : 1000,
    disponible:true
}

Object.freeze(producto)//bloquear modificación, no se puede modificar, solo se puede leer 
Object.seal(producto)//permite modificar solo los atributos de la propiedad que ya exisen, pero no permite añadir nuevos atributos, ni eliminar atributos
Object.preventExtensions(producto)//bloquea añadir nuevos atributos

//reescribir objeto
objetos.disponible=false
//Si no existe el nombre de la propiedad, se crea
objetos.imagen="https://codigoconjuan.com/wp-content/uploads/2022/03/codigoconjuan.png"

//Eliminar propiedad
delete objetos.imagen
console.log(objetos);
