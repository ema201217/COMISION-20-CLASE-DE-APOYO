// filter

// - retorna un nuevo array con info filtrada
// - el callback debe retornar en una condición (boolean)

/* 
  const arr = [1,2,3,4,5,6,7]
  arr.filter(element => condición(boolean))
*/

const arr = [1, 2, 3, 4, 5, 6, 7];
const numPares = arr.filter((num, index) => num % 2 === 0); // [2, 4, 6]
// console.log(numPares);

const filter2 = (array, callback) => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i)) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};

const numPares2 = filter2(arr,(num, index) => num % 2 === 0)
console.log(numPares2)