"use strict";

const parrafo1 = document.querySelector("#parrafo1");
const parrafo2 = document.querySelector("#parrafo2");

parrafo1.textContent = "<strong>Importante</strong>";
parrafo2.innerHTML = "<strong>Importante</strong>";

// En el parrafo1 se escribe literalmente "<strong>Importante</strong>" porque
// edita el propio texto pero el el parrafo2 el inner html lo pone dentro


const pre1 = document.querySelector("#pre1");

pre1.textContent = parrafo1.outerHTML + "\n" + parrafo2.outerHTML;

// Aquí se muestra directamente el codigo que contenian las etiquetas anteriores


const mensaje = prompt("Escribe un texto","Ejemplo");

const resultado = document.querySelector("#resultado");

if (mensaje == null){
    resultado.textContent = "Entrada cancelada";
} else {
    resultado.textContent = mensaje;
}

// Aqui muestro el mensaje que ha metido el usuario o cancelado si le ha dado al cancelar
