//Eventos Submit 
const formulario = document.querySelector('#formulario')
formulario.addEventListener('input', e=>{
    e.preventDefault();//Prevenimos el default de un submit(enviar)

    const nombre = document.querySelector('#nombre').value//Los convertimos en value, para saber lo que esta ingresando el usuario
    const password = document.querySelector('#password').value

    //Validamos que ninguno de ls dos campos pueda ir vacio
    if(nombre === ' ' ||password === '' ){
        console.log('Todos los campos son obligatorios');     
    }
    else{
        console.log('All good logging in - Todo bie, iniciando sesión');      
    }
})