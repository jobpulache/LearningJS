//Seleccionar Elementos - DOM
//Selector es como un elemento de css. Lo seleccionamos y comenzamos a cambiar las propiedades para que cambie de apariencia

const heading = document.querySelector('.heading')//Solo devuelve un elemento por ejemplo en una nav - solo trae un a 
console.log(heading);
console.log(heading.tagName);
console.log(heading.textContent);
console.log(heading.classList);
console.log(heading.id);

const enlaces = document.querySelector('.navegacion a')//Solo toma un enlace de la navegación
const enlacesSomeVarios = document.querySelectorAll('.navegacion a')//Esto nos trae o toma todos los enlaces de la nav.
console.log(enlaces);
console.log(enlacesSomeVarios);



