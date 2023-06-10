const objDireccion = {
  pais: "Argentina",
  provincia: "Buenos Aires",
  localidad: "San Miguel",
  calle: "calle falsa",
  num: "123",
  cp: 1663,
};
const { num, cp, ...newObj } = objDireccion;

// console.log(newObj);


const arrNum = [1,2,3,4,5,6,7,8,9,10]
const [,,,,,...restNum] = arrNum

console.log(restNum) // [6,7,8,9,10]