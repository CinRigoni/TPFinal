'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticuloManufacturadoDetalle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ArticuloManufacturadoDetalle.belongsTo(models.BajaLogica, {
        foreignKey: 'id',
        targetKey: 'bajaLogica_id'
      })
    }
  }
  ArticuloManufacturadoDetalle.init({
    cantidad: DataTypes.DECIMAL,
    unidadMedida: DataTypes.STRING,
    articuloInsumoId: DataTypes.INTEGER,
    ArticuloManufacturado_id: DataTypes.INTEGER,
    bajaLogica_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ArticuloManufacturadoDetalle',
  });
  return ArticuloManufacturadoDetalle;
};