//.Encadenamiento opcional? y Operador coalescente nulo ??

//Optional Chaining (?)  Permite acceder a las propiedades de un objeto o llamar metodoss de propiedades sin saber si existen o no
const alummno ={
    nombre: 'Job',
    clases: 'Programación1',
    aprobado: true,
    examenes:{
        examen1:20
    }
}
console.log(alummno.examenes?.examen1);//Con esto preguntado (?) si existe examenes. Y si es así, que me devuelva la nota del ex1

//Nullish coalecing Operator (??)
const pagina = null ?? 1// Retorna el valor que esta al lado derecho, cuando el valor que está al lado izquiero es null o undifined
//Esto se usa mas en paginaciones
console.log(pagina);



