const fs = require('fs')



module.exports = {
  removeNote: (id) => {
    console.log("Producto eliminado");
  },
  createNote: () => {
    fs.writeFileSync(
      "nota.txt",
      "Javascript es un lenguaje de programación",
      "utf-8"
    );
  },
  listarNotas: () => {
    console.log("listando...");
  }
};
