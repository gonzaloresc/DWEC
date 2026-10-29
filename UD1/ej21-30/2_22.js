"use strict";

let calculadora = true

do {

    let num1 = "a";
    let num2 = "a";

    while(typeof num1 !== "number" || Number.isNaN(num1)){
        num1 = prompt("Primer Número", "1");
        
        if (num1 == null || num1 == NaN || num1 == Infinity || num1 == ""){
        alert("Calculadora finalizada");
        break;
        }

        num1 = Number(num1);

    }
    while(typeof num2 !== "number" || Number.isNaN(num1)){
        num2 = prompt("Segundo Número", "2");
        
        if (num2 == null || num2 == NaN || num2 == Infinity || num2 == ""){
        alert("Calculadora finalizada");
        break;
        }

        num2 = Number(num2);
    }
    
    let resultado = 0;
    const error = false;

    const tipo = prompt("Tipo","suma");

    if (tipo == null){
        alert("Calculadora finalizada");
        break;
    }

    switch(tipo){
        case "suma": resultado = num1 + num2;
            break;
        case "resta": resultado = num1 - num2;
            break;
        case "multiplicar": resultado = num1 * num2;
            break;
        case "dividir": resultado = num1 / num2;
            break;
        case "potencia": resultado = num1 ** num2;
            break;
        case "modulo": resultado = num1 % num2;
            break;
        default: error = true;

    }

    if (error){
        alert("Has introducido un operador inválido");
    }

    if (resultado !== null || resultado !== NaN || resultado !== Infinity){
        alert(resultado);
    } else {
        alert("Ha ocurrido un error en el cáculo");
    }

    



    const uso = prompt("Seguir calculando?", "Si");
    if(uso === "No"){
        calculadora = false;
    }

} while (calculadora)
