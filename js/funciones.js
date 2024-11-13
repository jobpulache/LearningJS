// export function sumar(n1, n2){
//     return n1 + n2
// }


// export function restar(num1, num2){
//     return num1 - num2 
// }

// export {
//     sumar,
//     restar 
// }


// //Otra forma es con export default
// //Solo puede haber un export default por archivo
// export default function multiplicar(nu1, nu2){
// return nu1 * nu2
// }

// export function division(one, two){
//     one / two
// }

//Este mismo código, pero en aroundFunction
export const  sumar = (n1, n2)=> n1 + n2
export const restar = (num1, num2) => num1 -num2
export const multiplicarTwo = (nu1, nu2) => nu1 * nu2
export const division = (one, two)=> one / two

//Acá el export default de mi function multiplicar va en la ultima linea
// export default multiplicar Puede ir debajo de la function
