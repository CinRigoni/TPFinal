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
    nombreBebida: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Bebida',
  });
  return Bebida;
};