"use strict";

const lanzar = document.querySelector("#lanzar");
const reiniciar = document.querySelector("#reiniciar");
const resultado = document.querySelector("#resultado");

lanzar.addEventListener("click",pulsarLanzar);
reiniciar.addEventListener("click",pulsarReiniciar);

const jugador = document.querySelectorAll("#div-jugador p");
const ordenador = document.querySelectorAll("#div-ordenador p");

// Función para el dado
function lanzarDado(){
    const dado = Math.floor(Math.random() * 6) + 1;
    return dado;
}


function pulsarLanzar(){
    console.log("Has pulsado el boton"); // Quitar luego, ahora es debug

    for(let i = 0; i<3; i++){
        jugador[i].textContent = lanzarDado();
        ordenador[i].textContent = lanzarDado();
    }

    resultado.textContent = ganador();

}

function pulsarReiniciar(){
    console.log("Has pulsado reiniciar"); // Quitar luego, ahora es debug
}


function ganador(){

    let final;

    if(jugador[0] === jugador[1] && jugador[1] === jugador[2] && ordenador[0] === ordenador[1] && ordenador[1] === ordenador[2]){
        final = calculadora();
    } else if(jugador[0] === jugador[1] && jugador[1] === jugador[2]){
        final = "Ganador: Tu";
    } else if(ordenador[0] === ordenador[1] && ordenador[1] === ordenador[2]){
        final = "Ganador: Ordenador"; // Aquí están todas las posiblilidades de triples empates
    } else if((jugador[0] === jugador[1] || jugador[1] === jugador[2] || jugador[2] === jugador[0]) && (ordenador[0] === ordenador[1] || ordenador[1] === ordenador[2] || ordenador[2] === ordenador[0])){
        final = empate();
    } else if(jugador[0] === jugador[1] || jugador[1] === jugador[2] || jugador[2] === jugador[0]){
        final = "Ganador: Tu";
    } else if(ordenador[0] === ordenador[1] || ordenador[1] === ordenador[2] || ordenador[2] === ordenador[0]){
        final = "Ganador: Ordenador"; // Aquí están todos los posibles empates de 2
    } else {
        final = calculadora();
    }
    return final;
}

function calculadora(){

    let sCal;

    if((Number(jugador[0].textContent)+Number(jugador[1].textContent)+Number(jugador[2].textContent))<(Number(ordenador[0].textContent)+Number(ordenador[1].textContent)+Number(ordenador[2].textContent))){
        sCal = "Ganador: Ordenador";
    } else if((Number(jugador[0].textContent)+Number(jugador[1].textContent)+Number(jugador[2].textContent))>(Number(ordenador[0].textContent)+Number(ordenador[1].textContent)+Number(ordenador[2].textContent))){
        sCal = "Ganador: Jugador";
    } else {
        sCal = "Empate";
    }
    return sCal;
}

function empate(){

    let vJugador;
    let vOrdenador;
    let vRes;

    if(jugador[0] === jugador[1]){
        vJugador = Number(jugador[0].textContent) + Number(jugador[1].textContent);
    } else if(jugador[1] === jugador[2]){
        vJugador = Number(jugador[1].textContent) + Number(jugador[2].textContent);
    } else {
        vJugador = Number(jugador[0].textContent) + Number(jugador[2].textContent);
    }

    if(ordenador[0] === ordenador[1]){
        vOrdenador = Number(ordenador[0].textContent) + Number(ordenador[1].textContent);
    } else if(ordenador[1] === ordenador[2]){
        vOrdenador = Number(ordenador[1].textContent) + Number(ordenador[2].textContent);;
    } else {
        vOrdenador = Number(ordenador[0].textContent) + Number(ordenador[2].textContent);;
    }

    if (vJugador > vOrdenador){
        vRes = "Ganador: Tu";
    } else if (vOrdenador > vJugador){
        vRes = "Ganador: Ordenador";
    } else {
        vRes = calculadora();
    }

}