'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bebidas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreBebida: {
        type: Sequelize.STRING
      },
      precioCompra: {
        type: Sequelize.DECIMAL
      },
      precioVenta: {
        type: Sequelize.DECIMAL
      },
      stockActual: {
        type: Sequelize.INTEGER
      },
      unidadMedida: {
        type: Sequelize.STRING
      },
      bajaLogica_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bebidas');
  }
};