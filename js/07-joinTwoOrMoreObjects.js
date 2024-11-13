//Unir tos o mas objetos - Join two or more objects
const producto = {
    nombre:"tablet",
    precio: 1000,
    disponible:true
}
const cliente ={
    nombre:"Job",
    premiun:true
}

// const carrito={
//     cantidad : 1,
//     ...producto//spreed operator - Con estos tres puntos se puede unir objetos. Esta ingresando al objetp producto 
// }

// console.log(carrito);


const nuevoObjeto={
 ...producto,
    ...cliente 
}
console.log(nuevoObjeto);
//Lo mismo, pero de una manera mas corta:
const nuevoObjeto2= Object.assign(producto,cliente)//Object.assign unr a producto y cliente
console.log(nuevoObjeto2);
