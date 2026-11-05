"use strict";

{
    const elementos = document.querySelectorAll("body, body *");
    // Esto coge los elementos de cualquier documento

    for (const elemento of elementos) {
        elemento.style.setProperty("font-family", "Arial, sans-serif", "important");
        elemento.style.setProperty("font-size", "20px", "important");
        elemento.style.setProperty("line-height","1.6","important");
        elemento.style.setProperty("color","#1F2937","important");
        elemento.style.setProperty("background","#FFF8E7","important");
    }
    // Recorremos los elementos y le cambiamos las propiedades, ponemos el important para
    // que vaya por encima de las suyas

}

