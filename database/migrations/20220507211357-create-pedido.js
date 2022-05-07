'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      numero: {
        type: Sequelize.INTEGER
      },
      estado_id: {
        type: Sequelize.INTEGER
      },
      horaEstimadaFin: {
        type: Sequelize.TIME
      },
      tipoEnvio: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.DECIMAL
      },
      usuario_id: {
        type: Sequelize.INTEGER
      },
      domicilio_id: {
        type: Sequelize.INTEGER
      },
      mercadoPagoDatos_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Pedidos');
  }
};