const { readJSON, writeJSON } = require("../data");
const Product = require("../data/Product");

module.exports = {
  detail: require('./products/detail'),
  add: require('./products/add'),
  create: require('./products/create'), // image single  
  edit: require('./products/edit'),
  update : require('./products/update'),
  remove : require('./products/remove')
};