/* 
Crear una función que reciba los tres lados, debe calcular el perímetro 
de un triangulo e indique a cual tipo de triangulo pertenece 
(Equilátero, Isósceles, Escaleno).

El mensaje que debe mostrarse por consola tiene que tener una estructura parecida a esta:
"El triangulo es Equilátero y su perímetro es 35"
*/

const perimetro = (l1, l2, l3) => l1 + l2 + l3;

const tipoTriangulo = (lado1, lado2, lado3) => {
  let respuesta = "Escaleno";
  if (lado1 === lado2 && lado2 === lado3) {
    respuesta = "Equilátero";
  } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    respuesta = "Isósceles";
  }
  return respuesta;
};

const existeErrores = (l1, l2, l3) => {
  // if(isNaN(l1) || isNaN(l2) || isNaN(l3)){
  //   return false
  // } else if(l1 < 1 || l2 < 1 || l3 < 1){
  //   return false
  // }
  // return true

  return isNaN(l1) || isNaN(l2) || isNaN(l3) || l1 < 1 || l2 < 1 || l3 < 1;
};

const triangulos = (lado1,lado2,lado3) => {
  if(existeErrores(lado1,lado2,lado3)){
    return "Uno de los valores ingresados es invalido"
  }
  const periValor = perimetro(lado1,lado2,lado3)
  const tipo = tipoTriangulo(lado1,lado2,lado3)
  return `El triangulo es ${tipo} y su perímetro es ${periValor}`
  // "El triangulo es Equilátero y su perímetro es 35"
}

console.log(triangulos(4,4,4)) // Equilátero y 12
