/* 
.length  .indexOf  .slice  .trim   .split   .replace
*/
// const msg = "hola mundo"; // ["h","o","l","a"," ","m"]
// console.log(msg.length); // longitud -> 10

// console.log(msg.indexOf("mundo")); // indice -> 5

// console.log(msg.slice(5, 10)); // recorta y devuelve -> "mundo"

// const msg2 = "             Hello world ";
// const msgConTrim = msg2.trim()
// // console.log(msgConTrim);

// const msgConSplit = msgConTrim.split("")

// const msgConReplace = msgConTrim.replace("world","mundo")
// console.log(msgConReplace)

// const frase = " El mejor momento del dya es ahora. "

const frase =
  "     El mejordasasdasdasddasmomento del dyaasdasdasdasd es ahora. ";

// 1 - Quitarle los espacios innecesarios de la "frase". -> (trim)
const fraseConTrim = frase.trim();

// console.log(fraseConTrim)

// 2 - Contar cuantos caracteres tiene la "frase".
const longitudFrase = fraseConTrim.length;
// console.log(longitudFrase);

// 3 - Identificar el indice de la frase "momento del dya", recortarla y mostrarla por consola.
const fraseABuscar = "momento del dya";
const longitudFraseBuscar = fraseABuscar.length; //
const indiceFrase = fraseConTrim.indexOf(fraseABuscar);
// console.log(indiceFrase) // --> 9

// El mejor momento del dya es ahora.
const fraseRecortada = fraseConTrim.slice(
  indiceFrase,
  indiceFrase + longitudFraseBuscar
);
// console.log(fraseRecortada);

// 4 - Con la palabra recortada en el punto 3, colocar la primer letra con MAYÚSCULA. Debemos obtener "Momento del dya".

/* 
  .toLowerCase() -> método string -> text minúscula
  .toUpperCase() --> método string -> text Mayúscula
*/
const primerLetra = fraseRecortada[0].toUpperCase();
const restoFrase = fraseRecortada.slice(1);
// capitalize -> Mayúscula al principio de una palabra
const capitalize = primerLetra + restoFrase;
// console.log(capitalize)

// 5 - De la ultima frase recortada y con mayúscula, reemplazar la palabra dya por día y mostrarla por consola.
const fraseFinal = capitalize.replace("dya", "día");
console.log(fraseFinal)
