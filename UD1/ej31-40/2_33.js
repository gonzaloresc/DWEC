"use strict";

let palabraSecreta;
let guionBajo = [];
let intentos = 10;
let letrasUsadas = [];
let letra = "";

const elegirPalabra = () => {
  palabraSecreta = prompt("Elige una palabra para empezar","casa");

  for(let i = 0; i < palabraSecreta.length; i++){
    guionBajo.push("_");
  }

  console.log(guionBajo.join(""));

}

const adivinarLetra = () => {
  letra = prompt("Escribe una letra","a");

  if (letrasUsadas.includes(letra)){
    console.log("Ya has usado esa letra");
  } else {

    if(palabraSecreta.includes(letra)){
      for(let i = 0; i < palabraSecreta.length; i++){

        if(palabraSecreta[i] === letra){
          guionBajo[i] = palabraSecreta[i]
        }
      }
    } else {
      intentos--;
      console.log(letra + " No es una letra de la palabra");
    }

    letrasUsadas.push(letra);

  }
  letra = "";
}

const juegoTerminado = () => {
  if(!guionBajo.includes("_") || intentos == 0){
    return true;
  } else {
    return false;
  }
}

const mostrarEstado = () => {
  console.log("Te quedan "+intentos+" intentos");
  console.log(guionBajo.join(""));
  console.log("Has usado "+ letrasUsadas.join(""));
}

const jugar = () => {
  elegirPalabra();

  while (!juegoTerminado()) {
    mostrarEstado();
    adivinarLetra();
  }

  mostrarEstado();

  if (!guionBajo.includes("_")) {
    console.log("Has ganado.");
  } else {
    console.log("Has perdido. La palabra era: " + palabraSecreta);
  }
};

jugar();
