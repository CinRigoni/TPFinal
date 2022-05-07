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
    estado_id: DataTypes.INTEGER,
    horaEstimadaFin: DataTypes.TIME,
    tipoEnvio: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    usuario_id: DataTypes.INTEGER,
    domicilio_id: DataTypes.INTEGER,
    mercadoPagoDatos_id: DataTypes.INTEGER,
    bajaLogica_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};