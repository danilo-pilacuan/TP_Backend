'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Prioridads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigoPrioridad: {
        type: Sequelize.STRING
      },
      denominacion: {
        type: Sequelize.STRING
      },
      porcentajeMarcha: {
        type: Sequelize.INTEGER
      },
      equipoAuxiliar: {
        type: Sequelize.INTEGER
      },
      influenciaSobreProceso: {
        type: Sequelize.INTEGER
      },
      influenciaCalidadProducto: {
        type: Sequelize.INTEGER
      },
      horasParoAlMes: {
        type: Sequelize.INTEGER
      },
      gradoEspecialidad: {
        type: Sequelize.INTEGER
      },
      influenciaEnLaSeguridad: {
        type: Sequelize.INTEGER
      },
      valorCriticidad: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Prioridads');
  }
};