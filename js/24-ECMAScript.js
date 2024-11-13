//Es una especificación de un lenguaje de programación
import { sumar as sumarOne, restar, multiplicarTwo, division} from "./funciones.js"; //Se le puede colocar un alias a nuestras funciones. Para evitar la colisión de nombres


const resultado = sumarOne(10, 20)
const resMulTi = multiplicarTwo(5, 5)
const resRes = restar(10,5)
const resDiv = division(20,2)
console.log(resultado);
console.log(resMulTi)
console.log(resRes);
console.log(resDiv);

;


//EXPORT DEFAULT
// const resMul = multiplicar(20,10)
// console.log(resMul);

