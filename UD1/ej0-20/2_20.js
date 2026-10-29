"use strict";

const num = Number(prompt("Numero", "4"));
let respuesta = "";

if(num <= 1 ){
    respuesta = num + " No es primo";

} else {

    respuesta = num + " Es primo";

    for(let i = 2; i<num;i++){
        if(num%i === 0){
            respuesta = num + " No es primo";
            break;
        }
    }
    

}
console.log(respuesta);