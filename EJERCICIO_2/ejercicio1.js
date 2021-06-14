// Ejercicio 1

const variableUno = 'varUno';
const variableDos = 'varUno';

console.log(variableUno === variableDos)

// Ejercicio 2

const variableObjeto = new String ('Javascript');
console.log(typeof variableObjeto)

// Ejercicio 3

const textoEjemplo = "¿Cómo puedo salir de VIM?: escribiendo \":q\"."
console.log(textoEjemplo)

// Ejercicio 4

const textoEnPantalla = `Talk is easy,
show me the code.

"Linux Torvalds"`

console.log(textoEnPantalla)

// Ejercicio 5
const listadoFrameworks = " Listado de frameworks: \n\ \t React \n\ \t Vue"

console.log(listadoFrameworks)

// Ejercicio 6 

const nombre = "Tomás";
const edad = "26";
const cadenaDeTextoUno = `Hola me llamo ${nombre} y tengo ${edad} años`
const cadenaDeTextoDos = "Hola me llamo" + " " + nombre + " y tengo" + " " +  edad + " años"

console.log(cadenaDeTextoUno);
console.log(cadenaDeTextoDos);


// -----------------------------------------> FORMAS DE CREAR UN OBJETO <----------------------------------------

// EJERCICIO 1

//FORMA UNO

const mesaUno = {
  numeroDePatas: 4,
  color: 'rojo',
  marca: 'apple',
  año: 2021
}
//FORMA DOS

const mesaDos = new Object();

mesaDos.numeroDePatas = 4;
mesaDos.color = 'rojo';
mesaDos.marca = 'apple';
mesaDos.año = 2021;

//FORMA TRES

const mesaTres = {}

mesaTres["numeroDePatas"] = 4;
mesaTres["color"] = 'rojo';
mesaTres["marca"] = 'apple';
mesaTres["año"] = 2021;

console.log(mesaTres)



// -----------------------------------------> FORMAS ACCEDER/MODIFICAR/BORRAR LAS PROPIEDADES DE UN OBJETO <----------------------------------------




// EJERCICIO 1 - ACCEDER A PROPIEDADES
  
const pilotoFormulaUno = {
    nombre: 'Sergio Perez',
    apodo: 'Checo Perez',
    escuderia: 'Red Bull',
    Edad: 31
  }
  
  // FORMA UNO
  
  console.log(pilotoFormulaUno.nombre);
  
  // FORMA DOS
  
  console.log(pilotoFormulaUno["apodo"])
  
  // FORMA TRES
  
  const newVariable = "escuderia";
  console.log(pilotoFormulaUno[newVariable])
  


  // EJERCICIO 2 - MODIFICAR PROPIEDADES DE UN OBJETO
  
  const miGrupoFavorito = {
    bandaDeMusica: 'Muse',
    estiloDeMusica: 'Rock',
    heIdoAVerlos: true,
    discos: 8
  }
  
  // FORMA UNO
  
  miGrupoFavorito.bandaDeMusica = 'SFDK';
  
  // FORMA DOS
  
  miGrupoFavorito['estiloDeMusica'] = 'RAP';
  
  // FORMA TRES
  
  const newVariable2 = false;
  
  const heIdoAVerlos = newVariable2;
  
  miGrupoFavorito.discos = 12;
  console.log(miGrupoFavorito)

  // EJERCICIO 3 - AÑADIR NUEVAS PROPIEDADES A OBJETOS

const ikea = {
    localidad: 'Rivas',
    ganancias: 1000,
    clientes: 912000,
    salidasDeEmergencia: 4
  }
  
  //CREAR NUEVA PROPIEDAD Y ANIDAR UN NUEVO OBJETO
  
  ikea.cocina =  empresaDeCocina = {
    empresa: 'illunion',
    empleados: 234,
    externos: true,
    finalizacion: 'Diciembre'
  }
  
  console.log(ikea)
  
  // FORMA UNO DE ACCEDER A PROPIEDADES ANIDADAS
  
  console.log(ikea.cocina.finalizacion)
  
  // FORMA DOS DE ACCEDER A PROPIEDADES ANIDADAS
  
  console.log(ikea["cocina"]["empresa"])
  
  // EJERCICIO 4 BORRAR PROPIEDADES DE UN OBJETO
  
  const impresora3D = {
    marca: 'Prusa',
    localidad: 'Republica Checa',
    fundador: 'Joseph Prusa',
    numeroDeImpresoras: 3000,
    empleados: 230,
    filamentoFavorito: 'PLA'
  }
  
  // FORMA DOS DE BORRAR LA PROPIEDAD
  
  delete impresora3D.filamentoFavorito;
    
  console.log(impresora3D);
  
  // FORMA DOS DE BORRAR LA PROPIEDAD
  delete impresora3D.numeroDeImpresoras;
  
  console.log(impresora3D);