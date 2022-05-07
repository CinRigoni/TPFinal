'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MercadoPagoDatos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MercadoPagoDatos.init({
    identificadorPago: DataTypes.INTEGER,
    fechaCreacion: DataTypes.DATE,
    fechaAprobacion: DataTypes.DATE,
    formaPago: DataTypes.STRING,
    metodoPago: DataTypes.STRING,
    nroTarjeta: DataTypes.STRING,
    estado: DataTypes.STRING,
    bajaLogica_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MercadoPagoDatos',
  });
  return MercadoPagoDatos;
};