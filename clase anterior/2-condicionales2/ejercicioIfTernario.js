// 1 - Pasar el condicional a un IF TERNARIO
// 2 - Pasar a switch el siguiente condicional
  //En ambos puntos debe existir:
    // a) La variable "mensaje"
    // b) Mostrarlo en consola
    
    const argv = require("process").argv;
    const entradaConsola = argv[2];
    const soyEstudiante = entradaConsola === "si";
    if (soyEstudiante) {
      console.log("Estoy aprendiendo javascript");
    } else {
      console.log("No estoy estudiando");
    }
    
    // Convertir los condicionales "if" de la función a "if ternarios"
    function crearArchivoTxt(nombreFile = null, contenido) {
      if (nombreFile === null || !isNaN(nombreFile)) {
        console.log("Debes ingresar un nombre de archivo valido");
        return;
      }
      if (typeof contenido !== "string") {
        console.log("El contenido debe ser una cadena de caracteres");
        return;
      }
      console.log("CREANDO ARCHIVO...")
    }