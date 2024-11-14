//Fecth API con Async Await y Try Catch
//Fecth API  Puede seer ejecutado con una función o sin una función. Pero Async Await si requiere una función
const url = 'https://jsonplaceholder.typicode.com/comments'
//Estos then van  a ser reemplazados por Await que van a esperar que finalice de ejecutar ese código para ir a la siguiente line



// fetch(url) ESsta es la sintaxis de Fecth API y Promises
// .then((response)=>{
//     if(response.ok){
//         return response.json()
//     }
//     throw new Error("No se pudo consumir la API...");
// })
// .then(data=>console.log(data)   )
// .catch (error=>console.log(error)
// )
//AMBAS SINTAXIS HACEN LO MISMO
const consultarApi = async ()=>{//Con poner async estamos convirtiendo esta función a asincrona, lo que me da acceso a la otra propiedad que se llama Await
    try {
        const response = await fetch(url)//Usamos tryCatch para manejar algún  posible error en toda estas instrucciones
        if(!response.ok){
            throw new Error("No pudimos con la API......");          
        }
        const data = await response.json()//Le decimos que nos devuelva la data en formaato JSON
        console.log(data);
    } catch (error) {
        console.log(error);//Nos muestre un error en caso suceda
        
    }
}
//con Async Await hacemos el llamado y esperamos una respuesta - con fecth hacemos llamado luego .then .then
consultarApi();