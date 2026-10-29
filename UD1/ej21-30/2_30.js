"use strict";

let plazas = 12;
let estado = "Sin confirmar";

function reservar(plazasRecibidas) {
  let estado = "Reserva simulada";
  plazasRecibidas -= 2;
  console.log("Dentro:", plazasRecibidas, estado);
  return plazasRecibidas;
}

const disponibles = reservar(plazas);
console.log("Resultado:", disponibles);
console.log("Fuera:", plazas, estado);

// 1. Que van a devolver?
//    - Creo que "disponibles" será 10 Reserva simulada
//    - Creo que el console.log será "Resultado:10"
//    - Creo que el segundo console.log será "Fuera:12 Sin confirmar"

// 2. He renombrado el parámetro y aparentemente no cambia nada

// 3. Ha salido un error por que "estado" no está definido, cuando
//    lo he restaurado todo ha seguido como antes

// 4. Voy a asignar las variables

plazas = disponibles;
estado = "confirmada";

console.log("Ej4:", plazas, estado);
// El resultado es "Ej4: 10 confirmada", cuando devuelves un resultado
// este está usando la funcion pero si lo asignas afuera, lo estás
// adaptando tu hardcodeando