class Medidas {
    constructor (nombre, alto, ancho) {
        this.nombre = nombre;
        this.alto = alto;
        this.ancho = ancho;
        this.metrosCuadrados = alto * ancho;
    }
}

function pintura() {
    let opcion = parseInt(prompt("Que tipo de pintura vamos a usar?: \n 1) Sintetica \n 2) Acrilica \n 3) Latex \n 4) Al Agua"));
    return opcion;
}

function medidaPared() {
    for (let i = 1; i <= pared; i ++) {
    let nombrePared = "Pared " + i;
    let altoPared = parseFloat(prompt("Ingrese el ALTO de la Pared " + i));
    let anchoPared = parseFloat(prompt("Ingrese el ANCHO de la Pared " + i));
    let paredResultado = new Medidas (nombrePared, altoPared, anchoPared);
    arrayPaderes.push(paredResultado);
    }
}

const arrayPaderes = [];


let nombre = prompt ("Bienvenido!!! Por favor, ingrese su nombre...");
let pared = parseInt(prompt("Hola " + nombre + ", Cuantas paredes vamos a pintar..."));
let opcion = pintura();

medidaPared();

console.log(arrayPaderes);
console.log("tipo de pintura " + opcion);
