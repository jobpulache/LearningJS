//Funciones Es lo que nos permite crear una serie de instrucciones que se ejecutan una sola vez
//FUnciones es una forma de dar instrucciones a una, con codigo reutilizable

//Funciones

function suma(){
    console.log(1 + 1);
    
}
suma();
//Funciones con parámetros
function sumas(a, b){
    console.log(a + b);
}
sumas(5, 3);

//Funciones con parámetros opcionales
function sumas2(a, b = 1){
    console.log(a + b);
}
sumas2(5);
sumas2(5, 3);

//Funciones con parámetros opcionales y variadicos
function sumas3(a, b, ...c){
    console.log(a + b + c);
}

sumas3(5, 3, 1, 2, 3);
