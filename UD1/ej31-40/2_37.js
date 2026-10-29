"use strict";

const tabla = document.getElementById("age-table");
console.log(tabla);
// Lo primero que hago es guardar en "tabla" lo que pide el ejercicio

const labels = tabla.getElementsByTagName("label");
console.log(labels);
// Luego guardo el "labels" los labels que habia dentro de "tabla"

const td = tabla.getElementsByTagName("td");
console.log(td);
// Lego cojo los "td" de "tabla"

const form = document.querySelector('form[name="search"]');
console.log(form);
// Ahora cojo el form que tiene como nombre "search"

const inputs = form.getElementsByTagName("input");
// Esta variable la he hecho para que me sea más facil el apartado siguiente


const primInput = inputs[0];
console.log(primInput);
// De inputs que he guardado los inpunts antes cojo el 0 osea el primero

const ultInput = inputs[inputs.length-1]
console.log(ultInput);
// De inputs cojo el total de su tamaño -1 (el último)
