//Manipular elementos del HTML con JS
const heading = document.querySelector('.heading')//Selecion solo un elemento 
const enlaces = document.querySelectorAll('.navegacion a')//Seleccionae todos los elementos de mi nav.


heading.textContent = 'Un new Heading'//Cambiar el texto del heading - textContent

const inputNombre = document.querySelector('#nombre');//En el input de typeNombre add this value
inputNombre.value='Un nuevo valor'

//Recorra todos los enlaces (a) y cambie el contenido de cada uno de ellos
enlaces.forEach(enlace => enlace.textContent = 'Hola')