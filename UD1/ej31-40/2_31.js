"use strict";

function suma(...numeros){
  let sum = 0;
  for(let i= 0; i<numeros.length; i++){
      sum += numeros[i];
  }
  return sum;
}

console.log(suma());          // Devuelve 0
console.log(suma(7));         // Devuelve 7
console.log(suma(2,3,4));     // Devuelve 9
console.log(suma(-2,5));      // Devuelve 3
console.log(suma(1.5,2.25));  // Devuelve 3.75

// Cuando no se ha introducido nada devuelve 0 por que
// la variable que suma está inicializada a 0