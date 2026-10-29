"use strict";

const precio = 8;

const cantidad = Number(prompt("cantidad", "3"));
const nombre = prompt("Nombre", "Pepe");

const total = cantidad * precio

console.log("El nombre es " +nombre+ ", la cantidad es " +cantidad+ ", el total es " +total+ "€");