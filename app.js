const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./views/home.html"))
);

app.get("/detalle-producto", (req, res) =>
  res.sendFile(path.join(__dirname, "./views/detalle-producto.html"))
);

app.listen(PORT, console.log(`http://localhost:${PORT}`));
