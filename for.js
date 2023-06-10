// 3da iteración i -> 2
const arrPares = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    arrPares.push(i);
  }
}
// console.log(arrPares)

let textNumeros = "";
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    textNumeros += i + " - ";
  }
}
// console.log(textNumeros)

// Calcular cual de todos los números son superiores al año en el que estamos y evaluar si son pares
// Los números son ->  2020 1099 2080 2343 2030 9473 2388 2024 2023 2001

const anios = [2020, 1099, 2080, 2343, 2030, 9473, 2388, 2024, 2023, 2001];  

const anioActual = 2023

for(let i = 0; i < anios.length; i++) {
  console.log(anios[i])
 /*  if(anios[i] > anioActual && anios[i] % 2 === 0){
    console.log(anios[i])
  } */
}

