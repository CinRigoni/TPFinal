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

      //Tablas relacionadas con bajaLogica
      let tablas = [
        models.MercadoPagoDatos,
        models.EstadoPedido,
        models.Rol,
        models.RubroGeneral,
        models.RubroInsumo,
        models.ArticuloInsumo,
        models.ArticuloManufacturado,
        models.Usuario,
        models.Domicilio,
        models.ArticuloManufacturadoDetalle,
        models.Bebida,
        models.Pedido
        //Si es necesario, se agrega acá otra tabla relacionada con bajaLogica
      ]
      tablas.forEach(tabla => {
        //Relacion con las tablas indicadas en el array
        BajaLogica.hasMany(tabla, {
          foreignKey: 'bajaLogica_id'
        })
      });
    }
  }
  BajaLogica.init({
    bajaLogica: DataTypes.BOOLEAN,
    fechaBaja: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BajaLogica',
  });
  return BajaLogica;
};