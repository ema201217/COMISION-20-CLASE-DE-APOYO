/* const isZoom = false;

if (isZoom) {
  console.log("Estamos estudiando programación"); 
} else {
  console.log("Estoy viendo Netflix");
} */

/* const isZoom = false;
let mensaje = "";
if (isZoom) {
  mensaje = "Estamos estudiando programación";
} else {
  mensaje = "Estoy viendo Netflix";
} */



// const isZoom = true;
// const msgTrue = "Estamos estudiando programación"
// const msgFalse = "Estoy viendo Netflix"
// const mensaje = isZoom ? msgTrue : msgFalse;
// console.log(mensaje);

// const edad = 30;
// const nombre = "Emanuel";
// const esEdadValido = edad > 0 && edad < 110;
// const esNombreValido = nombre.length < 35 && nombre.length > 2;


/* if(!esEdadValido){
  console.log("La edad es invalida")
} else if (!esNombreValido) {
  console.log("El nombre es invalido")
} else {
  console.log("Formulario enviado!!")
} */
/* 
  condición(booleano) ? código si es verdadero : código si es falso
*/

const edad = -10;
const nombre = "Ema";
const esEdadValido = edad > 0 && edad < 110;
const esNombreValido = nombre.length < 35 && nombre.length > 2;

const mensajeRespuesta =
         !esEdadValido ?
         "La edad es invalida" :
         !esNombreValido ?
         "El nombre es invalido" :
         "Formulario enviado!!";

console.log(mensajeRespuesta)