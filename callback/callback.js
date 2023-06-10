// const {join} = require("path");
// const contador = (callback) => {
//   const { writeFileSync } = require("fs");
//   callback(writeFileSync);
// };


// contador((metodoWriteFs) => {
  //   const _path = join(__dirname, "productos.json");
  //   const producto = {
    //     titulo: "Cafetera",
    //     precio: 1233,
    //     id: 18723012,
    //   };
    //   metodoWriteFs(_path, JSON.stringify(producto, null, 3), "utf-8");
    // });
    
    // foreach:
    // - Recorre un array de acuerdo a la cantidad de elementos que contenga
    
    /* 
    [1,2,3,4,5].foreach((num) => {})
    */
   // Array.prototype.forEach = function(){}
   // [1,2,3,4].forEach
   
   
   const { foreach2 } = require('./prototypes')
   
   foreach2([1,2,3,4,5],(num) => {
  console.log(num + 10)
})

// require('./prototypes')

const arr = [1, 2, 3, 4, 5];
arr.forEach2((num) => {
  console.log(num + 2);
});
