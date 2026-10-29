"use strict";

function solicitarConfirmacion(pregunta, aceptar, cancelar){
  if(confirm(pregunta)) {
    aceptar();
  } else {
    cancelar();
  }
}

const confirmar = function(){
  console.log("Reserva confirmada");
}

const cancelar = function(){
  console.log("Reserva cancelada");
}

solicitarConfirmacion("¿Quieres confirmar tu plaza en el taller de JavaScript?",confirmar,cancelar);

solicitarConfirmacion("¿Quieres confirmar tu plaza en el taller de JavaScript?",
  function () {
    console.log("Reserva confirmada");
  },
  function () {
    console.log("Reserva cancelada");
  }
);