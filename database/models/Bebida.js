'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bebida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bebida.init({
    nombreBebida: DataTypes.STRING,
    precioCompra: DataTypes.DECIMAL,
    precioVenta: DataTypes.DECIMAL,
    stockActual: DataTypes.INTEGER,
    unidadMedida: DataTypes.STRING,
    bajaLogica_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bebida',
  });
  return Bebida;
};