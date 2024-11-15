//Eventos Submit 
const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e=>{
    e.preventDefault();//Prevenimos el default de un submit(enviar)

    const nombre = document.querySelector('#nombre').value//Los convertimos en value, para saber lo que esta ingresando el usuario
    const password = document.querySelector('#password').value

    //Crearemos elemetos HTML - Generamos la alerta
    const alerta = document.createElement('DIV')//Creamos un div en HTML - va en mayus because el API de js lo reconoce así
    alerta.classList.add('alerta', 'text-white', 'uppercase', 'text-sm', 'text-center', 
        'p-2', 'font-black')//Aquí estamos agregandole clases de Tailwind

        //Evitar que nos salgan mas alertas cuando ya existe uno
    const alertaPrevia = document.querySelector('.alerta')//Estamos tomando a mi variable alerta
    //Usamos la sintaxis de optionalChaining para verificar que si ya existe una alerta y evitar que salgan mas
    alertaPrevia?.remove()//Esta preguntando si esta la variale entonces la elimine.F


    //Validamos que ninguno de ls dos campos pueda ir vacio
    if(nombre === ' ' ||password === '' ){
        alerta.textContent="Todos los campos son obligatorios"//Le estamos dando contenido a mi alerta
        alerta.classList.add('bg-red-500')//Le damos un bg a div, con class taiwilnd
        
    }
    else{
        alerta.textContent = "Iniciando sesión"  
        alerta.classList.add('bg-green-500')//Le damos un color  a la alerta
    }
    formulario.appendChild(alerta)//Aqui estamos dandale a alerta como elemento hijo a el formulario

    //eliminar la alerta pasando un cierto tiempo
    setTimeout(() => {//Pasando este tiempo la alerta se eliminara
        alerta.remove()
    }, 3000);
})