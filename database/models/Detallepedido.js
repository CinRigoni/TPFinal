'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DetallePedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DetallePedido.belongsTo(models.ArticuloManufacturado, {
        foreignKey: 'id',
        targetKey: 'articuloManufacturado_id'
      })

      DetallePedido.belongsTo(models.Bebida, {
        foreignKey: 'id',
        targetKey: 'bebida_id'
      })
    }
  }
  DetallePedido.init({
    cantidad: DataTypes.INTEGER,
    subtotal: DataTypes.DECIMAL,
    articuloManufacturado_id: DataTypes.INTEGER,
    bebida_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DetallePedido',
  });
  return DetallePedido;
};