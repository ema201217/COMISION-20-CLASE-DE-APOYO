const express = require("express");
const path = require("path");
const createRoutesGet = require("./functions/createRoutesGet");
const PORT = 3030;
const app = express();

// req --> request  --> lo que recibo del cliente
// res --> response  --> lo que enviamos nosotros al cliente

const arrConfigRoutes = [
  {
    pathName: "/",
    filename: "home.html",
  },
  {
    pathName: "/gise",
    filename: "gisela.html",
  },
  {
    pathName: "/mati",
    filename: "matias.html",
  },
  {
    pathName: "/gonza",
    filename: "gonza.html",
  }
];

/* arrConfigRoutes.forEach(({ pathName, filename }) => {
}); */
// app.get('/render', (req, res) => {
//   res.send(`
//   <h2>Esto lo esta renderizando el servidor </h2>
//   `);
// });

app.use(express.static('public')) // middleware que configura 

createRoutesGet(app, arrConfigRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
