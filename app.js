const express = require("express");
const path = require("path");
const PORT = 3030;
const path = require("path");
const app = express();

// req --> request  --> lo que recibo del cliente
// res --> response  --> lo que enviamos nosotros al cliente
app.get("/home", (req, res) => {
  const pathFileHome = path.join(__dirname, "./views/home.html");
  res.sendFile(pathFileHome);
});
app.get("/gise", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/gisela.html"));
});
app.get("/mati", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/matias.html"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
