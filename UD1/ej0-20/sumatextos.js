"use strict";


const primero = parseInt(prompt("Primer número", "4"));
const segundo = parseInt(prompt("Segundo número", "7"));
console.log(primero + segundo);

// 1. El primer código a a dar 47 ya que se concatenan, para evitarlo he puesto parseInt y asi se convierten en números

const tercero = parseInt(prompt("Tercer número", "-3"));
const cuarto = parseInt(prompt("Cuarto número", "8"));
console.log(tercero + cuarto);
// Aquí he hecho el segundo ejemplo



// 2. Aquí estan los 3 pares de  numeros de este ejercicio he usado parseFloat para que puedan ser decimales

// Primeros numeros del apartado, el resultado es 6.25
const quinto = parseFloat(prompt("Quinto número", "2.5"));
const sexto = parseFloat(prompt("Sexto número", "3.75"));
console.log(quinto + sexto);

// Siguiente numeros del apartado, el resultado es 2.5
const num7 = parseFloat(prompt("Séptimo número", "-1.5"));
const num8 = parseFloat(prompt("Octavo número", "4"));
console.log(num7 + num8);

// Siguiente numeros del apartado, el resultado es 0.25
const num9 = parseFloat(prompt("Noveno número", "0"));
const num10 = parseFloat(prompt("Decimo número", "0.25"));
console.log(num9 + num10);