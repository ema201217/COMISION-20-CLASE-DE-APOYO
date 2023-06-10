const frutas = ["banana","manzana","naranja","pera"]

// Me devuelve un nuevo array con los datos que coinciden con la condición
// const frutasFiltradas = frutas.filter((fruta) => {
//   if(fruta === "naranja" || fruta === "manzana"){
//     return fruta
//   }
// })

const frutasFiltradas = frutas.filter((fruta) => {
  return fruta !== "naranja" && fruta !== "manzana";
})

console.log(frutasFiltradas)