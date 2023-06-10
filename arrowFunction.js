/* function sumar() {
}
const sumar2 = function(){
} */
/* 
  variable = () => {}
*/
// const sumar = (n1, n2) => n1 + n2;
// console.log(sumar(2, 2));

const fs = require("fs");

/* function crearArchivoTxt(filename = null, content) {
  if (filename === null || !isNaN(filename)) {
    console.log("Debes ingresar un nombre de archivo valido");
    return;
  }
  if (typeof content !== "string") {
    console.log("El contenido debe ser una cadena de caracteres");
    return;
  }
  fs.writeFileSync(`./archivesTxt/${filename}.txt`, content);
} */

const textCapitalize = function (palabra) {
  const primerLetra = palabra[0]; // 1 - leer primer letra
  const letraMayuscula = primerLetra.toUpperCase(); // 2 - transformo letra
  const restoPalabra = palabra.slice(1); // 3 - recorto el resto
  return letraMayuscula + restoPalabra; // 4 - unimos la letra transformada y el resto
};

// 1 - Pasar las funciones a arrow function y los condicionales a if ternario

const crearArchivoTxt2 = (filename = null, content) => {
  let message = null;

  // si el nombre del archivo es nulo o si es un número
  message =
    filename === null || !isNaN(filename)
      ? "Debes ingresar un nombre de archivo valido"
      : message;

  if(message) return message

  message =
    typeof content !== "string"
      ? "El contenido debe ser una cadena de caracteres"
      : message;

  return message !== null
    ? message
    : fs.writeFileSync(`./archivesTxt/${filename}.txt`, content);
};
// console.log(crearArchivoTxt2("text2"))


const textCapitalize2 = (palabra) => palabra[0].toUpperCase() + palabra.slice(1)


console.log(textCapitalize2("emanuel"))