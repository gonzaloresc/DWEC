"use strict";

function contarCaracter(texto, caracter){
  let contador = 0;
  for(let i=0; i< texto.length; i++){
    if(texto[i] === caracter){
      contador++;
    }
  }
  return contador;
}

console.log(contarCaracter("","")); // Devuelve 0
console.log(contarCaracter("IES Virgen del Carmen","o")); // Devuelve 0
console.log(contarCaracter("Tenemos que luchar por nuestros sueños","e")); // Devuelve 5




