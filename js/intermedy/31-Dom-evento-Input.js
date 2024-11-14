//Evento input
const inputNombre = document.querySelector('#nombre')//Seleccionando un elemento dede HTML con ID
inputNombre.addEventListener('input', (e)=>{//Usamos el evento Input
   console.log(e.target.value);//Va a ir apareciendo en la consola todo lo que el usuario va escribiendo en este input
})

const inputPassword =document.querySelector('#password')
inputPassword.addEventListener('input', functionPassword())//Se crea una funcion a parte cuando tenemos varios input de Type Password que van a cumplir la misma funcion

//Creamos la functionPassword 
//Se visualizara el password solo por un tiempo definido, luefo se oculta
function functionPassword(){
    //Todo el código que se ejecutará dentro de esta function
    inputPassword.type="text"

    //Que se oculte lo que digitando en un determinado tiempo
    setTimeout(() => {
        inputPassword.type='password'
    }, 3000);
}