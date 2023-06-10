const fs = require("fs");
// HOME BANKING

// 1 - Crear un archivo dentro de la carpeta json con el nombre homeBanking.json
// fs.writeFileSync("./homeBanking.json", usuariosJSON, "utf-8");

// 2 - Dentro del archivo colocar un array con 2 objetos con las siguientes propiedades id, usuario y saldo.
/* const usuarios = [
  {
    id: 1,
    usuario: "Alejandro Salinas",
    saldo: 1000000,
  },
  {
    id: 5236,
    usuario: "Carlos Braian DelPrado",
    saldo: 2030000,
  },
]; 
const usuariosJSON = JSON.stringify(usuarios, null, 3);
fs.writeFileSync("./homeBanking.json", usuariosJSON, "utf-8");
*/

// 3 - Luego de colocar la información,leerlo nuevamente al archivo y agregar un nuevo usuario al JSON con las mismas propiedades.

/* const usuariosJSONRead = fs.readFileSync("./homeBanking.json", "utf-8"); // devuelve string json

const usuariosParser = JSON.parse(usuariosJSONRead)

const nuevoUsuario = {
  id: 26798,
  usuario: "Gonzalo Armoa",
  saldo: 100000,
};

usuariosParser.push(nuevoUsuario)
const usuarioJSON = JSON.stringify(usuariosParser,null,3)
fs.writeFileSync("./homeBanking.json", usuarioJSON, "utf-8") */


// 4 - Obtener el primer usuario, modificar su saldo y guardarlo en el json.
const usuariosJSONRead = fs.readFileSync("./homeBanking.json", "utf-8");
const usuariosParser = JSON.parse(usuariosJSONRead);

const primerUsuario = usuariosParser[0];
primerUsuario.saldo = primerUsuario.saldo - 400000;
console.log(usuariosParser)
const usuarioJSON = JSON.stringify(usuariosParser,null,3)

fs.writeFileSync('./homeBanking.json',usuarioJSON,'utf-8')
