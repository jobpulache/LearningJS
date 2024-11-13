//Recorriendo arrays con for

for (let i = 0; i < 11; i++) {
    console.log('I love JavaScript and Abigail Oriana', i);
    
}

const tecnologias = ['JavaScript', 'TypeScript', 'React', 'NodeJS', 'AngularJS'];
// for (let i = 0; i < tecnologias.length; i++){
//     console.log(tecnologias[i]);
    
// }

//FOR EACH
// //For each ejecuta una funcion dada por la cantidad de veces que tiene un array
// tecnologias.forEach(function(tech){
//         console.log(tech);
// })

//Map
//Map devuelve un nuevo array con los valores devueltos por la funcion dada
//Map genera un array nuevo en base a la funcion que le estamos pasando
const arrayMap = tecnologias.map(function(tech){
    return tech

})


//For ... of
//For of es similar a for each pero se puede iterar sobre arrays y objetos
for (let tech of tecnologias){
    console.log(tech);
    
}

console.log(arrayMap);

