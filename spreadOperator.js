const arrPares = [2, 4, 6, 8, 10];
const arrImpares = [1, 3, 92828,5, 7, 9, 11,9621];
const allNum = [...arrPares,...arrImpares]
// console.log(Math.max(...allNum))

// console.log(allNum) 
// [2, 4, 6, 8, 10, 1, 3, 5, 7, 9, 11]

let objPersona = {
  nombre: 'Emanuel',
  apellido: 'Arroyo',
  edad: 10
}

if(objPersona.edad > 18) {
  objPersona = {
    ...objPersona,  //   nombre: 'Emanuel', apellido: 'Arroyo', edad: 30 
    puedePasar: true
  }
}

console.log(objPersona)
/* 
{
  nombre: 'Emanuel',
  apellido: 'Arroyo',
  edad: 30,
  puedePasar: true
} 
*/






/* 
  {...arrPares}  -> { 2, 4, 6, 8, 10 } ❌

  [...arrPares]  -> [ 2, 4, 6, 8, 10 ] ✅

  [...objPersona] -> [ nombre: 'Emanuel',apellido: 'Arroyo', edad: 30 ] ❌

  {...objPersona} --> { nombre: 'Emanuel',apellido: 'Arroyo', edad: 30 } ✅

*/

