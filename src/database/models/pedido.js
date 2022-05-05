'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedido.init({
    fecha: DataTypes.DATE,
    numero: DataTypes.INTEGER,
    estado: DataTypes.INTEGER,
    horaEstimadaFin: DataTypes.DATE,
    tipoEnvio: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    usuarioId: DataTypes.INTEGER,
    domicilioId: DataTypes.INTEGER,
    detallePedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};