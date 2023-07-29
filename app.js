const express = require("express");
const path = require("path");
const app = express();
const PORT = 3030;

app.use(express.static("public"));



/* CONFIGURACIÓN EJS */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/* REQUIERE LOS ENRUTADORES */
const indexRoutes = require("./routes/index.js");
const productsRoutes = require("./routes/products.js");

/* CONFIGURACIÓN DE LAS ROUTES - BASADO EN ENTIDADES */
app.use("/", indexRoutes);
app.use("/productos", productsRoutes); // ENTIDAD PRODUCTS

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));