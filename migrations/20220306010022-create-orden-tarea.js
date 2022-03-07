'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orden_Tareas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaSolicitud: {
        type: Sequelize.DATE
      },
      semanaInicial: {
        type: Sequelize.INTEGER
      },
      idTarea: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tareas',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      idOrden: {
        type: Sequelize.INTEGER,
        references: {
          model: 'OrdenTrabajos',
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
    await queryInterface.dropTable('Orden_Tareas');
  }
};