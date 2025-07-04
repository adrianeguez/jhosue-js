// Mutables e Inmutables

// Mutables  (re asignadas)
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 12;
numeroDos = 8;
// numeroUno = false;
// numeroDos = true;
// let > var

// Inmutables  (re asignadas)
const configuracionArchivos = 'PDF';
// configuracionArchivos = 'XML';

// vamos a preferir CONST > LET > VAR (mejor no usar)



// Tipos de variables (primitivas)
const numero = 1; // number
const sueldo = 1.2; // number
const texto = 'Adrian' // string
const apellidos = "Eguez" // string
const casado = true; // boolean
const hijos = null; // object
const zapatos = undefined; // undefined
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellidos);
console.log(typeof casado);
console.log(typeof hijos);
console.log(typeof zapatos);




// Truty y Falsy
if(true){
    console.log('Es verdadero');
} else {
    console.log('Es falso');
}
if(""){ // string vacio
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // FALSY
}
if("Adrian"){ // string vacio
    console.log('Es verdadero'); // TRUTY
} else {
    console.log('Es falso');
}
if(-1){
    console.log('Es verdadero -1'); // Verdadero
} else {
    console.log('Es falso -1');
}
if(0){
    console.log('Es verdadero 0');
} else {
    console.log('Es falso 0'); // Falso
}
if(1){ // string vacio
    console.log('Es verdadero 1'); // Verdadero
} else {
    console.log('Es falso 1');
}

if(null){ // string vacio
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // falso
}
if(undefined){ // string vacio
    console.log('Es verdadero');
} else {
    console.log('Es falso'); // falso
}

const adrian = {
    "nombre": "Adrian",
    'apellido': 'Eguez',
    edad: 32,
    hijos: null,
    casado: true,
    zapados: undefined,
    ropa: {
        color: 'plomo',
        talla: 40,
    },
    mascotas: ['Cache', 'Pequi', 'Pandi'],
};

