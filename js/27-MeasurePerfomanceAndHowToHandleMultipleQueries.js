//Medir perfomance y como manejar multiples consultas
//Cuando queramoa ver cuál es la versión más rápida de dos códigos que hagan lo mismo usaremos Perfomance.now()
const url= 'https://jsonplaceholder.typicode.com/comments'
const url2 = 'https://jsonplaceholder.typicode.com/todos'
const url3 = 'https://jsonplaceholder.typicode.com/photos'

const consultarAPI = async()=>{
    try {
        //Un error muy común cuando estamos consumiendo datos de diferentes lugares  es hacer esto: Hacer lo mismo para cada
        //Dato o recurso que vamos a consumir. Con esto estamos realizando peticiones a diferentes URL y con el await estamos esperando que se realice ese llamado, para continuar con la siguiente linea
        //Y lo final tiene que esperar a que todo se resuelva, para poder hacer el llamado, eso hace que nuestras app sean lentas
        //En algunos casos este código esta bien, pues a veces queremos realizar una consulta y dependiendo de la respuesta avanzar o solicitar otra consulta

        const inicio = performance.now()//Con esto empezamos a medir el perfomance(tiempo)
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);  

        const response2 = await fetch(url2)
        const data2 = await response2.json()
        console.log(data2);  
        

        const response3 = await fetch(url3)
         const data3 = await response3.json()
         console.log(data3);
         


        const fin = performance.now();//Cuando ya ha terminado el perfomance (el contador)
        console.log(`el resultado de la PRIMERA FUNCTION es: ${fin - inicio} ms`);//Imprimimos el resultado para ver el tiempo que tardo en hacer la consulta

        
    } catch (error) {
        console.log(error.message);     
    }
}

consultarAPI();

//Esta es una mejor opción. Claro, dependiendo de lo que  se requiera / Aqu´vamos a incluir todo el código de arriba en un primise

const consultarAPI2 = async ()=>{
    try {
        const inicio = performance.now()
        const [response, response2, response3] = await Promise.all([fetch(url), fetch(url2), fetch (url3)])//Execute the function at the same time da mejor perfomance
        const [data, data2, data3]= await Promise.all([response.json(), response2.json(), response3.json()])
        console.log(data);
        console.log(data2);
        console.log(data3);
        
        const fin = performance.now()
        console.log(`El resultado de la SEGUNDA FUNCTION es: ${fin - inicio} ms`);
        
        
    } catch (error) {
        console.log(error);
    }
    //Con este código todas las consultas se realizaran al mismo tiempo, por ende será mas rápido
}
consultarAPI2();