'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticuloManufacturado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ArticuloManufacturado.init({
    tiempoCocinaEstimado: DataTypes.INTEGER,
    denominacion: DataTypes.STRING,
    precioVenta: DataTypes.DECIMAL,
    imagen: DataTypes.STRING,
    rubroGeneralId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArticuloManufacturado',
  });
  return ArticuloManufacturado;
};