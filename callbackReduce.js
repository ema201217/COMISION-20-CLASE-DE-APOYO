const arrNum = [1,2,3,4,5,6]
const data = arrNum.reduce((acum,num,index) => {
  acum += num;
  return acum;
},0);

// console.log(data)

const reduce = (array, callback, initialValue = 0) => { // initialValue -> {} 
    let data = initialValue
    for (let i = 0; i < array.length; i++) {
      data = callback(data, array[i],i) // (acum,num,index) // función retorna el numero 4 6 veces
    }
    return data
}

// const cantidad = reduce(arrNum,(acum,num) => { // 15
//   acum += num
//   return acum
// },0)

/* const arrNum = [1,2,3,4,5,6] */
const obj = reduce(arrNum,(acum,num,index) => { // 15
  acum[num + index] = num
  return acum
},{})

console.log(obj)