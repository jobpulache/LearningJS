//Funciones Return Values

//Como se declara en un function expression
// const sumar = function(num1, num2) => {
//     return num1 + num2
// }

//Esto es con el function declaration
// function sumar(n1 = 0, n2 = 0) {
//     return n1 + n2
// }

//function arrow function
//Puede ir sin el return cuando solo tienes una sola linea
const sumar = (n1 =0, n2=0)=> (n1 + n2) 


const result= sumar(10, 20)
sumar(300, 1)
sumar(40, 50)

console.log(result);

