// // Modificar arrays
// const tecnologias = ['JavaScript', 'TypeScript', 'React', 'NodeJS', 'AngularJS'];

// // Modificar arrays
// tecnologias.push('c#');//Agrega un nuevo elemento al final del array7

// //This its's another way to add an element to the end of the array
// tecnologias.splice(tecnologias.length, 0, 'c#');

// //This it's another manner
// const newArray = [...tecnologias, 'PHP'];
// console.log(newArray);

// //This is one manner de add an element to the first position of the array
// const newArray2 = ['php', ...tecnologias]
// console.log(newArray2); 
// // Modificar arrays
// tecnologias[8] = 'Angular';
// console.log(tecnologias);


//access each element of the array individually
// const LenguajeProgramacion = ['java', 'jvm', 'j#', 'sql', 'myql'];
// const lenguageProgramming = LenguajeProgramacion.filter(function(tech){//Filter permite sacar o filtrar elementos de un array en base a cierta condicion
//     if(tech === 'java'){
//         return tech;
//     }
// })
// console.log(tech);

 const tecnologiasDesign = ['canvas', 'figma', 'adobexd', 'sketch', 'photoshop'];
 const design = tecnologiasDesign.filter(function(tech){
    if(tech === 'figma'){
        return tech;
    }
 })