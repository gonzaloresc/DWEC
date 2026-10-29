"use strict";

function precioFinal(precio, porcentaje){
  let rebaja = (precio * porcentaje) / 100;
  return precio - rebaja;
}

console.log(precioFinal(80, 0)); //Devuelve 80
console.log(precioFinal(80, 25)); // Devuelve 60
console.log(precioFinal(80, 100)); // Devuelve 0
