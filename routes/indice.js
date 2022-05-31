const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);

const index = []

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  }).forEach(fileRuta => {
    let ruta = require(path.join(__dirname, fileRuta))
    index.push(ruta)
  });

  module.exports = index;