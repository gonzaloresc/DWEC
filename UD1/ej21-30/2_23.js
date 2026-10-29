"use strict";

const codigos = [101, 108, 115, 123, 137, 142, 156, 164, 178, 190];

let primero = 0;
let ultimo = codigos.length -1;

let encontrado = false;
const num = Number(prompt("Num", "101"));

while (primero <= ultimo) {
    let medio = Math.floor((primero + ultimo) / 2);

    if (codigos[medio] === num) {
      console.log(medio);
      encontrado = true;
      break;
    } else if (codigos[medio] < num) {
      primero = medio + 1;
    } else {
      ultimo = medio - 1;
    }
}

if (!encontrado){
    console.log("El indice no existe")
}


