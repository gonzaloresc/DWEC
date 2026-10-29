"use strict";

const saludo = document.getElementById("saludo");
const nombre = document.getElementById("nombre");

// Aquí asigno a las constantes los elementos del
// html que he creado antes

function saludar(tecla){ // Aquí creo la función
  if(tecla.key === "Enter"){ // y aquí compruebo si la tecla pulsada en el enter
    saludo.textContent = "Hola, "+nombre.value; // Aquí se asigna lo que va a salir en el h1
  }
}

nombre.addEventListener("keydown",saludar);
// Aquí cojo la letra pulsada y llamo a la función anteriormente creada