//Fetch API Con primises
const url='https://jsonplaceholder.typicode.com/comments';
//Para utlizar fetch Api existen dos funciones con function y sin function

//Sin function
//Con este c´dódigo le estamos diciendo que se conecte a esta URL y nos de una response(Respuest)
// fetch(url)//This Function ya existe en JS
//     .then((response)=>{//Estos son los pasos =>Esta es la respuesta
//        return response.json()
// })

// fetch(url)//Estamos conectandonos a servidos
//     .then((response)=>{
//         return response.json()//Le decimos que nos devuelva los datos en .json
//     })
//     .then(data=>{
//         console.log(data);//Me vaya trayendo la data       
//     })

//Agregado .catch para proporcionarle un error en caso no se logre consumir la API
fetch(url)
//Agregamos conficional
    .then((response)=>{
        if(response.ok){
            return response.json()
        }
        throw new Error("Hubo un error al extraer nuestra API");//Generamos un error en caso nos se logre la conexión     
    })
    .then(data=> console.log(data)
    ).catch(error=> console.log(error)//Se puede poner error.message para que solo nos muestre el mensaje y no info adic.
    )