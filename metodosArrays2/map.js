const arrNum = [1, 4, 5, 65, 20, 3, 99, 48];
const arrNombres = [
  "Gonzalo Sotelo",
  "Leonardo Garcia",
  "Gonzalo Armoa",
  "Gisela Vargas",
];

// Itera y y retorna un nuevo array con alguna modificación
const nuevoArr = arrNum.map((num) => {
  // [2,4,6,66,20,4,100,48]
  if (num % 2 !== 0) {
    return num + 1;
  }
  return num;
});

// console.log(nuevoArr);

const arrObj = arrNombres.map((nombre, index) => {
  return {
    id: index,
    fullname: nombre,
  };
});

// console.log(arrObj)
