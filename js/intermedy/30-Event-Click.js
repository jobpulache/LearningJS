//Evento clic en JS
//Cuando seleccionamos un elemento tenemos acceso a registrarle un evento
//Con la function de addEventListener tenemos acceso a agregar un evento
const heading = document.querySelector('.heading')
const enlaces = document.querySelectorAll('.navegacion a')//Estamos tomando todos los enlaces con el querySelectoAll

//This event Click
heading.addEventListener('click', ()=>{//trabajando con sintaxis de AroundFunction
    heading.textContent='Diste click'
})//Esto se conoce como un colback. Espera que pase ese evento y cuando ocurre se lanza la función

//cuando acerque mi cursos parecido al Hover de css
heading.addEventListener('mouseenter', () =>{
    heading.textContent='Manu rios'
})

//Cuando  ya aleje mi cursor
heading.addEventListener('mouseleave', () =>{
    heading.textContent='Saliendo-..'
})

//Enlaces
enlaces.forEach(enlace =>{
   enlace.addEventListener('click',(e)=>{//Escuchamos por un evento click. Con ese (e) lo colocamos para evitar el default de un enlace
    e.preventDefault();//Prevenimos ese salto en la pantalla que es default de un enlace - cualquier evento que se realice por default , ya sea para formulario, btn, etc
    // enlace.textContent='Hola'//Cambiamos el texto de enlace 
    e.target.textContent='Hola, Diste click.'//Es sobre lo que dimos click o sobre lo que dispara este evento
   })  
})