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
      Pedido.belongsTo(models.EstadoPedido, {
        foreignKey: 'id',
        targetKey: 'estadoPedido_id'
      })

      Pedido.belongsTo(models.Usuario, {
        foreignKey: 'id',
        targetKey: 'usuario_id'
      })

      Pedido.belongsTo(models.Domicilio, {
        foreignKey: 'id',
        targetKey: 'domicilio_id'
      })

      Pedido.belongsTo(models.MercadoPagoDatos, {
        foreignKey: 'id',
        targetKey: 'mercadoPagoDatos_id'
      })

      Pedido.hasOne(models.Factura, {
        foreignKey: 'pedido_id'
      })
    }
  }
  Pedido.init({
    fecha: DataTypes.DATE,
    numero: DataTypes.INTEGER,
    estadoPedido_id: DataTypes.INTEGER,
    horaEstimadaFin: DataTypes.TIME,
    tipoEnvio: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    usuario_id: DataTypes.INTEGER,
    domicilio_id: DataTypes.INTEGER,
    mercadoPagoDatos_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};