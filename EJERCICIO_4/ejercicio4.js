// EJERCICIO 1 

function comparar (a, b) {
    return a >= b
}

console.log(comparar(6, 4))

// EJERCICIO 2

let instancia = new String('hola') // Transforma el string en un objeto de string

console.log(instancia instanceof String)


// EJERCICIO 3 

let a = 25;
let b = new Number('25')

console.log(a + b)

// EJERCICIO 4 

function getDniChar(dni = 12345678){
    const resto = dni % 23
    const cadena = 'TRWAGMYFPDXBNJZSQVHLCKET'
    return dni + cadena[resto]
}

console.log(getDniChar())

// EJERCICIO 5 

function nuevoIva (valorProducto){
    const nuevoIvaProducto = (valorProducto * 0.11) + valorProducto
    return nuevoIvaProducto
 }
 
 console.log(nuevoIva(100))

// EJERCICIO 6

const parametros = {
    nombre: 'tomas',
    cantidad: 25,
    producto: 'Manzanas',
    ciudad: 'Madrid'
  }
  
  function correoPersonalizado ({nombre, cantidad, producto, ciudad}){
    return nombre + ', ha pedido' + ' ' + cantidad + ' unidades de' + ' ' + producto + ', y se lo vamos a enviar a' + ' ' + ciudad;
  }
  
  console.log(correoPersonalizado(parametros))