// map
// - devuelve un nuevo array con la modificación establecida en el callback
// - el callback debe retornar en un tipo de dato


const arr = [1,2,3,4,5]

const nuevoArr = arr.map((num,index) => num + 10)
/* console.log(nuevoArr) */

const map2 = (array, callback) => {
  const arr = []
  for (let i = 0; i < array.length; i++) {
    arr.push(callback(array[i],i))
  }
  return arr;
}

const newArr2 = map2(arr,(num,index) => num + 10)

