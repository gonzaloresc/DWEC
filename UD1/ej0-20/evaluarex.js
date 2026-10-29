"use strict";

console.log("a" + 2 + 3);           // Espero: "a23"
console.log("5" - 3 + 2);           // Espero: 4
console.log(false + true + false);  // Espero: false || Me he equivocado sale 1
console.log(9 / "3");               // Espero: 3
console.log("3" * "4");             // Espero: 12
console.log(7 + 8 + "px");          // Espero: "15px"
console.log("€" + 3 + 2);           // Espero: "€32"
console.log("5" - 1);               // Espero: 4
console.log("5em" - 1);             // Espero: NaN
console.log("-7" + 3);              // Espero: "-73"
console.log("-7" - 3);              // Espero: -10
console.log(null + 2);              // Espero: 2
console.log(undefined + 2);         // Espero: NaN
console.log(" \t \n" - 1);          // Espero: -1
console.log(1 / 0);                 // Espero: Infinity