'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstadoPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EstadoPedido.init({
    nombreEstado: DataTypes.STRING,
    bajaLogica_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EstadoPedido',
  });
  return EstadoPedido;
};