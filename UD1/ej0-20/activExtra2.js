"use strict"

const precios = [3,6,9];
// lo declaro con const para que quede asignado a la dirección de memoria

// Ej 1
console.log(precios[0]); // 3
console.log(precios[2]); // 9

precios[1] = 5; // Modificar el segundo

precios.push(60); // Añadir

// mostrar
console.log(precios); // 3,5,9,60

// longitud
console.log(precios.length); // 4


// Ej 2

precios.pop()

console.log(precios); // 3,5,9

console.log(precios.length); // 3


// Ej 3

// la declaré con const por que no afecta a los valores, solo afecta a que los espacios de memoria usados sean los mismos