"use strict";

function mensaje(nombre = "Gonzalo", mensaje = "Hola"){
  console.log("Nombre= " + nombre + " Mensaje= " + mensaje);
}

mensaje("Pedro","Buenas tardes"); // Resultado: Nombre= Pedro Mensaje= Buenas tardes
mensaje("Pepe") // Resultado: Nombre= Pepe Mensaje= Hola
mensaje(undefined,"") // Resultado: Nombre= Gonzalo Mensaje=

