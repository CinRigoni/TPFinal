const { Sequelize } = require('sequelize');

const config = require('./config');

let conexion = async() => {
    const sequelize = new Sequelize(config.development)
    try {
        await sequelize.authenticate();
        console.log('Conexion establecida con la Base de Datos');
      } catch (error) {
        console.error('Error al conectar a la Base de Datos:', error);
      }
};

module.exports = conexion;

 