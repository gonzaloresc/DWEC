"use strict";

// ej 1

let a = 10;
let b = 5;

a += 5;
console.log(a); // 15

b *= 3;
console.log(b); // 15

a /= 2;
console.log(a); // 7.5

// ej 2

a = "10";
b = "5";

console.log(a + b); // "105"
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2

// ej 3

const resultado = a > b ? "A es mayor" : "B es mayor o igual";
console.log(resultado); // "B es mayor o igual"
// Si son cadenas se compara en ASCII los primeros numeros y 5 es mayor que 1


// ej 4

console.log(typeof(a)) // "string"

// ej 5

console.log(2 << 1); // 4
console.log(2 >> 1); // 1
