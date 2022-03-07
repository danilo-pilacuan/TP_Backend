'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrdenTrabajos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero: {
        type: Sequelize.STRING
      },
      fechaOrden: {
        type: Sequelize.DATE
      },
      idTaller: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tallers',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idArea: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Areas',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idActivo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Activos',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      observaciones: {
        type: Sequelize.STRING
      },
      idSolicitante: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Trabajadors',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    await queryInterface.dropTable('OrdenTrabajos');
  }
};