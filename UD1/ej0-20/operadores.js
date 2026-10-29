"use strict";

// 1.

let a = 10;
let b = 3;
{
    let a = 3;
    // Cuando aquí quitas el let y dejas solo a = 3 el ultimo console.log dará 3, 3
    console.log(a, b); // Creo que aquí va a salir 3, 3
}
console.log(a, b); // Creo que aquí va a salir 10, 3


// 2.

console.log(++a); // Aquí aparecerá 11 porque se incrementa (++) antes
console.log(b++); // Aquí se sigue mostrando 3 por que primero se muestra y luego se incrementa
console.log(a); // Aquí se mostrará 11 porque se ha incrementado antes
console.log(b); // Aquí se mostrará 4 porque lo hemos incrementado antes


// 3.

console.log(a+b); // Suma, resultado 15
console.log(a-b); // Resta, resultado 7
console.log(a*b); // Multiplicación, resultado 44
console.log(a/b); // División, resultado 2.75
console.log(a%b); // Resto, resultado 3

a++; // Incremento
b--; // Decremento

console.log(a === b); // No son iguales (a === b)
console.log(a !== b); // Son distintos (a !== b)
console.log(a > b); // a es mayor (a > b)
console.log(a <= b); // a no es menor o igual que b (a <= b)
