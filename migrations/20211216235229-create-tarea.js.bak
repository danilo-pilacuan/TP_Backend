'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tareas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      mantenimiento: {
        type: Sequelize.STRING
      },
      idTrabajadorResponsable: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Trabajadors',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      semanaInicial: {
        type: Sequelize.INTEGER
      },
      idPeriodicidad: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Periodicidads',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idEstadoMantenimiento: {
        type: Sequelize.INTEGER,
        references: {
          model: 'EstadoMantenimientos',
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
    await queryInterface.dropTable('Tareas');
  }
};