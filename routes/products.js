const express = require("express");
const router = express.Router();
const { detailProduct } = require("../controllers/products.controllers.js");

/*  app -->  /products  */
//    app     +    this
router.get("/detalle", detailProduct); //  /products + /detail  --> /products/detail

module.exports = router;
