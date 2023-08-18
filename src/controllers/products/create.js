const { readJSON, writeJSON } = require("../../data");
const Product = require("../../data/Product");


module.exports = (req, res) => {
    const products = readJSON("products.json"); 
    let newProduct = new Product(
      {
        ...req.body,
        imagePrincipal: req.file?.filename || "default-img.png"
      }
    );
    products.push(newProduct);

    writeJSON(products, 'products.json');

    return res.redirect('/admin');
}