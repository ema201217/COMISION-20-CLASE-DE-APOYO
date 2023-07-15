const e = require("express");
const path = require("path");
const app = e();

app.use(e.static("public"));

app.get('/',(req,res) => res.redirect('/carousel-bootstrap'))
app.get("/carousel-bootstrap", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/carousel-bootstrap.html"));
});

app.get("/slider-glider", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/slider-glider.html"));
});

app.get("/input-require", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/input-require.html"));
});

app.listen(3000, () => console.log(`http://localhost:3000`));
