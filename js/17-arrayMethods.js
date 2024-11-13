//Array Methods
const tecnologies = ["JS", "HTML", "CSS", "TS", "PYTHON", "REACT"]
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Filter - devuelve un nuevo array con los elementos que cumplen la condición/ Puede sacar o dejar un elemento en base a cierta condición

// const newArray = tecnologies.filter((tech)=>tech === "JS")//Nos traes¡ solo JS
// console.log(newArray);


// //Filter - dejar solo js
// const newArray2 = tecnologies.filter((tech)=>tech !=="JS")
// console.log(newArray2);

// //Includes - Devuelve true si el elemento existe en el array
// const result = tecnologies.includes("PYTHON")
// console.log(result);


//Some - Devuelve true si alguno de los elementos cumple la condición
// const result = numeros.some(numeros => numeros >5)
// console.log(result);

//Find - Devuelve el primer elemento que cumple la condición
// const result = numeros.find(numeros => numeros >5)
// console.log(result);

//Every - Devuelve true si todos los elementos cumplen la condición
// const result = numeros.every(numeros =>numeros <=10)
// console.log(result);

//Reduce - Devuelve un valor calculado a partir de todos los elementos del array. Retorna un acumulado del total
//Esto ayuda cuando agregamos cosas al carrito y queremos calcular el total
//this help  when we add things to the cart and we want to calculate the total
//Total is the acumulated value - number is the current value
 const result = numeros.reduce((total, numero) => total +numero, 0)
//This 0 is the initial value
console.log(result);







