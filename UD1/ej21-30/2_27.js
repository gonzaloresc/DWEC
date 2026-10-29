"use strict";

function menor(num1,num2){
  if(num1 < num2){
    console.log(num1 + " Es menor que " + num2);
  } else if (num2 < num1){
    console.log(num2 + " Es menor que " + num1);
  } else {
    console.log("Los numeros son iguales");
  }
}

menor(2,4); // Resultado: 2 Es menor que 4
menor(5,2); // Resultado: 2 Es menor que 5
menor(3,3); // Resultado: Los numeros son iguales


function potencia(num,exp){

  let resultado = 1;

  if(exp > 0 && Number.isInteger(exp)){

    for(let i = 1 ; i <= exp ; i++){
      resultado *= num;
    }

  } else {
    resultado = "No se admiten exponentes menores que 1 o decimales"
  }
  return resultado;
}

console.log(potencia(-2,4)) // resultado 16
console.log(potencia(-2,7)) // resultado -128




