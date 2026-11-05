"use strict";

const lanzar = document.querySelector("#lanzar");
const reiniciar = document.querySelector("#reiniciar");
const resultado = document.querySelector("#resultado");
const razonJ = document.querySelector("#razonJ");
const razonO = document.querySelector("#razonO");
const jugador = document.querySelectorAll("#div-jugador p");
const ordenador = document.querySelectorAll("#div-ordenador p");

// Aquí estoy asignando las partes del html para poder usarlas a lo largo del código

lanzar.addEventListener("click",pulsarLanzar);
reiniciar.addEventListener("click",pulsarReiniciar);

// Aquí estoy escuchando cuando se pulse algún boton


// Función para el dado
function lanzarDado(){
    const dado = Math.floor(Math.random() * 6) + 1;
    return dado;
}


function pulsarLanzar(){
    for(let i = 0; i<3; i++){
        jugador[i].textContent = lanzarDado();
        ordenador[i].textContent = lanzarDado();
    }

    // Aquí le asigno a cada uno de los 3 espacios un numero con el dado

    explicacionJugador();
    explicacionOrdenador();

    resultado.textContent = ganador();

    // Aquí llamo a las explicaciones de cada jugador y a que se realice el calculo del ganador

}

function pulsarReiniciar(){
    for(let i = 0; i <3; i++){
        jugador[i].textContent = "";
        ordenador[i].textContent = "";
    }

    razonJ.textContent = "";
    razonO.textContent = "";
    resultado.textContent = "Esperando tirada...";
}
// Aquí si pulsa reiniciar se vacian todos los campos y las razones


function explicacionJugador(){

     if(Number(jugador[0].textContent) === Number(jugador[1].textContent) && Number(jugador[1].textContent) === Number(jugador[2].textContent)){
        razonJ.textContent = "Triple de "+ Number(jugador[0].textContent);
     } else if (Number(jugador[0].textContent) === Number(jugador[1].textContent) || Number(jugador[2].textContent) === Number(jugador[0].textContent)){
        razonJ.textContent = "Pareja de "+ Number(jugador[0].textContent);
     } else if (Number(jugador[1].textContent) === Number(jugador[2].textContent) ){
        razonJ.textContent = "Pareja de "+ Number(jugador[1].textContent);
     } else {
        razonJ.textContent = "Sin combinación";
     }
}
// Estas son las explicaciones de los resultados del jugador con las distintas posibilidades

function explicacionOrdenador(){

     if(Number(ordenador[0].textContent) === Number(ordenador[1].textContent) && Number(ordenador[1].textContent) === Number(ordenador[2].textContent)){
        razonO.textContent = "Triple de "+ Number(ordenador[0].textContent);
     } else if (Number(ordenador[0].textContent) === Number(ordenador[1].textContent) || Number(ordenador[2].textContent) === Number(ordenador[0].textContent)){
        razonO.textContent = "Pareja de "+ Number(ordenador[0].textContent);
     } else if (Number(ordenador[1].textContent) === Number(ordenador[2].textContent) ){
        razonO.textContent = "Pareja de "+ Number(ordenador[1].textContent);
     } else {
        razonO.textContent = "Sin combinación";
     }
}
// Estas son las explicaciones de los resultados del ordenador con las distintas posibilidades

function ganador(){

    let final;

    if(Number(jugador[0].textContent) === Number(jugador[1].textContent) && Number(jugador[1].textContent) === Number(jugador[2].textContent) && Number(ordenador[0].textContent) === Number(ordenador[1].textContent) && Number(ordenador[1].textContent) === Number(ordenador[2].textContent)){
        final = calculadora();
    } else if(Number(jugador[0].textContent) === Number(jugador[1].textContent) && Number(jugador[1].textContent) === Number(jugador[2].textContent)){
        final = "Ganador: Tu";
    } else if(Number(ordenador[0].textContent) === Number(ordenador[1].textContent) && Number(ordenador[1].textContent) === Number(ordenador[2].textContent)){
        final = "Ganador: Ordenador"; // Aquí están todas las posiblilidades de triples empates
    } else if((Number(jugador[0].textContent) === Number(jugador[1].textContent) || Number(jugador[1].textContent) === Number(jugador[2].textContent) || Number(jugador[2].textContent) === Number(jugador[0].textContent)) && (Number(ordenador[0].textContent) === Number(ordenador[1].textContent) || Number(ordenador[1].textContent) === Number(ordenador[2].textContent) || Number(ordenador[2].textContent) === Number(ordenador[0].textContent))){
        final = empate();
    } else if(Number(jugador[0].textContent) === Number(jugador[1].textContent) || Number(jugador[1].textContent) === Number(jugador[2].textContent) || Number(jugador[2].textContent) === Number(jugador[0].textContent)){
        final = "Ganador: Tu";
    } else if(Number(ordenador[0].textContent) === Number(ordenador[1].textContent) || Number(ordenador[1].textContent) === Number(ordenador[2].textContent) || Number(ordenador[2].textContent) === Number(ordenador[0].textContent)){
        final = "Ganador: Ordenador"; // Aquí están todos los posibles empates de 2
    } else {
        final = calculadora();
    }
    return final;
}

// Si sale un triple empate en ambos jugadores, se averigua con la calculadora quien tiene el número
// mas alto, si solo uno saca triple, gana. Si ambos sacan un doble empate se llama a "empate" para
// que desempate, si solo uno de los dos saca pareja gana ese. Si ninguno hace una combinación se
// resuelve con la calculadora


function calculadora(){

    let sCal;

    if((Number(jugador[0].textContent)+Number(jugador[1].textContent)+Number(jugador[2].textContent))<(Number(ordenador[0].textContent)+Number(ordenador[1].textContent)+Number(ordenador[2].textContent))){
        sCal = "Ganador: Ordenador";
    } else if((Number(jugador[0].textContent)+Number(jugador[1].textContent)+Number(jugador[2].textContent))>(Number(ordenador[0].textContent)+Number(ordenador[1].textContent)+Number(ordenador[2].textContent))){
        sCal = "Ganador: Tu";
    } else {
        sCal = "Empate";
    }
    return sCal;
}

// Aquí se suman los números para dar una respuesta


function empate(){

    let vJugador;
    let vOrdenador;
    let vRes;

    if(Number(jugador[0].textContent) === Number(jugador[1].textContent)){
        vJugador = Number(jugador[0].textContent) + Number(jugador[1].textContent);
    } else if(Number(jugador[1].textContent) === Number(jugador[2].textContent)){
        vJugador = Number(jugador[1].textContent) + Number(jugador[2].textContent);
    } else {
        vJugador = Number(jugador[0].textContent) + Number(jugador[2].textContent);
    }

    if(Number(ordenador[0].textContent) === Number(ordenador[1].textContent)){
        vOrdenador = Number(ordenador[0].textContent) + Number(ordenador[1].textContent);
    } else if(Number(ordenador[1].textContent) === Number(ordenador[2].textContent)){
        vOrdenador = Number(ordenador[1].textContent) + Number(ordenador[2].textContent);
    } else {
        vOrdenador = Number(ordenador[0].textContent) + Number(ordenador[2].textContent);
    }

    if (vJugador > vOrdenador){
        vRes = "Ganador: Tu";
    } else if (vOrdenador > vJugador){
        vRes = "Ganador: Ordenador";
    } else {
        vRes = calculadora();
    }

    return vRes;
}

// Aquí se resuelven los empates dobles pero si el numero queda en empate se termina llamando
// a la calculadora