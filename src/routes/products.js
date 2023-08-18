const express = require("express");
const {
  detail,
  add,
  edit,
  create,
  update,
  remove,
  create2,
} = require("../controllers/productsController");
const { upload } = require("../middleware/upload");

const router = express.Router();

/* /products */

router
  .get("/detail/:id", detail)
  .get("/add", add)
  .post("/add", upload.single("imagenPrincipal"), create) // single image
  .get("/edit/:id", edit)
  .put("/update/:id", update)
  .delete("/remove/:id", remove);

module.exports = router;
