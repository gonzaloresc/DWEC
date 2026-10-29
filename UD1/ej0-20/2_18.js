"use strict";

const temp = Number(prompt("Temperatura", "30"));
const sentido = prompt("Sentido de conversion", "Fahrenheit");

switch(sentido) {
    case "Fahrenheit":
        console.log(temp * 9 / 5 + 32);
        break;
    case "Celsius":
        console.log((temp -32) * 5 / 9);
        break;
    default:
        console.log("Opcion no encontrada");
    
}