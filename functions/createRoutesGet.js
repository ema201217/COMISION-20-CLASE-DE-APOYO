const path = require("path");

const createRoutesGet = (app,arrConfig) => {
  arrConfig.forEach(({ pathName, filename }) => {
    app.get(pathName, (req, res) => {
      res.sendFile(path.join(__dirname, "../views", filename));
    });
  });
}

module.exports = createRoutesGet