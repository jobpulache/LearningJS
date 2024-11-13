const saldo = 1000
const pagar = 500
const tarjeta = true

// usaremos logical or y and. Or(una de las dos se cumpla). &&(And(lasdos se cumplan))

// if(saldo > pagar  || tarjeta){//Con estoestamos usando la sintaxis de OR
//     console.log('Puedes pagar');
// }else{
//     console.log('No cuentas con suficiente saldo');
// }

if(saldo > pagar  && tarjeta){//Con estoestamos usando la sintaxis de and     
    console.log('Puedes pagar');
}else{
    console.log('No cuentas con suficiente saldo'); 
}