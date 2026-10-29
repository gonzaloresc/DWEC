"use strict";

let num = prompt("Num", "101");

if(num == null){
  alert("El número no puede ser nulo");
} else if (num == ""){
  alert("El número no puede estar vacio");
} else {

  num = Number(num);

  if(Number.isNaN(num)){
    alert("El argumento debe ser un número");
  } else if (!Number.isFinite(num)){
    alert("El numero debe ser finito");
  } else if (!Number.isInteger(num)){
    alert("El numero tiene que ser entero");
  } else if (num < 0){
    alert("El número no debe ser negativo");
  } else if (num > 18){
    alert("El número no puede ser mayor que 18")  
  } else {

    if(num == 0){
      alert("El factorial de 0 es 1");
    }

    let factorial = 1;

    for(let i = 1 ; i <= num ; i++){

      factorial*=i;

    } 

    alert("El factorial de " + num + " es " + factorial);

  }

}

