const express = require("express");
const PORT = 3030;
const path = require('path')
const app = express();

 app.get('/gise',(req,res) => {
res.sendFile(path.join(__dirname,'./views/gisela.html'))
 })

 app.get('/mati',(req,res) => {
    res.sendFile(path.join(__dirname,'./views/matias.html'))
 })


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
                                      