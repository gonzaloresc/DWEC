"use strict";

const num = Number(prompt("numero", "8"));
let resultado = "";

if (num < 0 || num > 100) {
    resultado = "Revisar";
} else if (num <= 49) {
    resultado = "Inicial";
} else if (num <= 79) {
    resultado = "Intermedio"
} else {
    resultado = "Avanzado"
}

console.log(resultado);