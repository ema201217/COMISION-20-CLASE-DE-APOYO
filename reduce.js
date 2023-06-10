const alumnos = ["Alejandro Salinas", "Leonardo Garcia", "Carolina Dicciaca"];
const data = alumnos.reduce((acum, alumno, index) => {
  // acum.nombre1 = alumno;
  // iteración 1 -> {nombre1 : 'Alejandro Salinas'}
  // iteración 2 -> {nombre1 : 'Leonardo Garcia'}
  // iteración 3 -> {nombre1 : 'Carolina Dicciaca'}

  acum[`nombre${index + 1}`] = alumno;
  return acum;
  
}, {}); /* acum = {} */

console.log(data); /* 
{
   nombre1: 'Alejandro Salinas',
   nombre2: 'Leonardo Garcia',
   nombre3: 'Carolina Dicciaca'
}
*/
