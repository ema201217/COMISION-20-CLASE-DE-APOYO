// includes
const includes2 = (array, valueBuscar) => {
  let existe = false;
  for(let i = 0;i < array.length; i++){
    if(array[i] === valueBuscar){
      existe = true
    }
  }
  return existe
}

Array.prototype.includes2 = function(valueBuscar) {
  let existe = false;
  for(let i = 0;i < this.length; i++){
    if(this[i] === valueBuscar){
      existe = true
    }
  }
  return existe
}

const arr3 = [1,2,3,4,5]

// const existeEl3 = includes2(arr3,9)
// console.log(existeEl3)

const existeEl3 = arr3.includes2(9)
console.log(existeEl3)

