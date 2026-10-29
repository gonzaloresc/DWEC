"use strict";

const num = Number(prompt("numero", "8"));

let resultado = num +":";

if (num % 1 === 0) {

    resultado += " Entero,";

} else {

    resultado += " Real no entero,";

}

if (num < 0) {

    resultado += " negativo,";

} else if (num > 0) {

    resultado += " positivo,";

} else {

    resultado += " no procede,";

}


if (num % 1 === 0) {

    if (num % 2 === 0) {
        resultado += " par."
    } else {
        resultado += " impar."
    }

} else {

    resultado += " Paridad: no procede";

}

console.log(resultado);