"use strict";

const enlaces = document.querySelectorAll("[href]");

// Guardo en enlaces los enlaces que tengan href

for (let e of enlaces){
    // Recorro la lista de enlaces

    const href = e.getAttribute("href");
    // guardo solo el atributo href

    if(href.includes("://") && !(href.includes("http://internal.com"))){
        e.style.color = "orange";
    }
    // Compruebo si incluye :// y que no tenga internal y en caso correcto se pondrá de color naranja

}


