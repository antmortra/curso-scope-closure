// Variables

var a;  /* declarando */
var b = 'b';  /* declaramos e inicializamos */
b = 'bb'; /* reinicializar */
var a = 'aa';  /* redeclaracion */


// GLOBAL SCOPE

let fruit = 'Apple'; /* global */

// Las variables que se asignen en la parte superior o dentro del documento sin estar dentro de un bloque o una función serán globales.

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// Ejemplo inicializar variable sin declarar

function countries() {
    country = 'Colombia'; /* Seria global si se escribe sin declarar */
    console.log(country);
}

countries();
console.log(country);