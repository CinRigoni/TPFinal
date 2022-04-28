'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuario.belongsTo(models.Rol, {
        foreignKey: 'id',
        targetKey: 'rolId'
      });
      Usuario.belongsTo(models.Domicilio, {
        foreignKey: 'id',
        targetKey: 'domicilioId'
      });
    }
  }
  Usuario.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    email: DataTypes.STRING,
    usuario: DataTypes.STRING,
    clave: DataTypes.STRING,
    rolId: DataTypes.INTEGER,
    domicilioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};