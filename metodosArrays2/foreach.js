const arrNum = [1,4,5,65,20,3,99,48]

const nuevoArr = arrNum.forEach(function(num,index) {
  if(num % 2 !== 0) {
    // console.log({
    //   index,  // index: index  -> index: 2
    //   valor: num
    // })
  }
})

const arrNombres = ["Gonzalo Sotelo","Leonardo Garcia","Gonzalo Armoa","Gisela Vargas"]

let listado = ""
// solo itera y no retorna nada
arrNombres.forEach((nombre,index) => {   
  listado += `${index + 1} - ${nombre}\n`
})

// console.log(listado)