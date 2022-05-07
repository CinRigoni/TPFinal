'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BajaLogicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bajaLogica: {
        type: Sequelize.BOOLEAN
      },
      fechaBaja: {
        type: Sequelize.DATE
      },
      usuarioBaja_id: {
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
    await queryInterface.dropTable('BajaLogicas');
  }
};