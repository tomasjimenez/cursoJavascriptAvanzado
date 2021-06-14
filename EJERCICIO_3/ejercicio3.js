// EJERCICIO 2

// FORMA 1

const arrayUno = new Array(1)

// FORMA 2

const arrayDos = Array(2)

// FORMA 3

const arrayTres = [];
arrayTres.length = 3;

// EJERCICIO 4

const arrayEjemplo = ["PHP", "Javascript", "JAVA", "C++", "Rust"];

arrayEjemplo[2] = "Phyton";

console.log(arrayEjemplo)

arrayEjemplo[3] = "Ruby";

console.log(arrayEjemplo)

// EJERCICIO 6

const programadores = ["Bill Gates", "Ada Lovelace", "Grace Hopper", "Hedy Lamarr", "Katherine Jhonson", "Steve Jobs"]

programadores.shift();
programadores.pop();

console.log(programadores)

programadores.unshift("Margaret Hamilton");
programadores.push("Carol Shaw")

console.log(programadores);


// EJERCICIOS FUNCIONES:

// EJERCICIO 1

function sumaCuadrado (a){
    return a * a
}
sumaCuadrado(8)

const totalSumaCuadrado = sumaCuadrado(8);

console.log(totalSumaCuadrado);

//EJERCICIO 6

function borrarElemento (objetoUno, propiedad) {
    return delete objetoUno[propiedad];
}

const objetoUno = {
    color: "rojo",
    tamanio: 52,
    sitio: "Madrid"
}

borrarElemento(objetoUno, "sitio");

console.log(objetoUno)

// EJERCICIO 8 

const programadores = ["Bill Gates", "Ada Lovelace", "Grace Hopper", "Hedy Lamarr", "Katherine Jhonson", "Steve Jobs"]

//BORRAR PRIMERA POSICION

function borrarPrimeraPosicion (array){
    return delete array[0];
}

borrarPrimeraPosicion(programadores);

console.log(programadores.filter(Boolean));



// BORRAR ULTIMA POSICION

function borrarUltimaPosicion (array){
    return delete array[array.length - 1]
}

borrarUltimaPosicion(programadores);

console.log(programadores.filter(Boolean))

// AÑADE UN ELEMNTO A LA PRIMERA POSICION 

 function insertarPrimeraPosicion(array, element){
    return array.unshift(element)
 }

 insertarPrimeraPosicion(programadores, "Hola")

 console.log(programadores.filter(Boolean))

 // AÑADE UN ELEMENTO A LA ULTIMA POSICION DEL ARRAY

 function insertarUltimaPosicion(array, element){
    return array.push(element)
 }

 insertarUltimaPosicion(programadores, "Hola")

 console.log(programadores.filter(Boolean))

 