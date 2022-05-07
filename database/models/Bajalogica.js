'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BajaLogica extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BajaLogica.init({
    bajaLogica: DataTypes.BOOLEAN,
    fechaBaja: DataTypes.DATE,
    usuarioBaja_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BajaLogica',
  });
  return BajaLogica;
};