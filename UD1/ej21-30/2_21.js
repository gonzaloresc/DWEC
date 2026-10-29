"use strict";

const max = 100;
const min = 1;

const numSecreto = Math.floor(Math.random() * (max - min + 1)) + min;

for(let i = 1 ; i <= 10 ; i++){

    const num = Number(prompt("Numero", "4"));

    if(num === numSecreto){
        console.log("Has acertado el número");
        break;
    } else if (i===10){
        console.log("Has agotado el límite de intentos!");
        console.log("El número era: " + numSecreto);
        break;
    } else {

        console.log("Intento nº " + i);
        if(num < numSecreto){
            console.log("El número secreto es más alto que " + num);
        } else {
            console.log("El número secreto es más bajo que " + num);
        }

    }

}


