'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MercadoPagoDatos', {
      mercadoPagoDatos_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      identificadorPago: {
        type: Sequelize.INTEGER
      },
      fechaCreacion: {
        type: Sequelize.DATE
      },
      fechaAprobacion: {
        type: Sequelize.DATE
      },
      formaPago: {
        type: Sequelize.STRING
      },
      metodoPago: {
        type: Sequelize.STRING
      },
      nroTarjeta: {
        type: Sequelize.STRING
      },
      estado: {
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
    await queryInterface.dropTable('MercadoPagoDatos');
  }
};