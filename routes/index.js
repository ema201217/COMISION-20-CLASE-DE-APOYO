const express = require("express");
const router = express.Router();

const indexControllers = require('../controllers/index.controllers.js')
/* / */

router.get('/',(req,res) => res.redirect('/home'));  // '/' + '/'  ->  '/'
router.get("/home", indexControllers.home);

module.exports = router;