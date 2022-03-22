'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('OrdenTrabajos', [
    {
      numero: '001',
      fechaOrden: new Date(),
      idTaller: 1,
      idArea: 1,
      idActivo: 1,
      observaciones: "Ninguna",
      idSolicitante: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numero: '002',
      fechaOrden: new Date(),
      idTaller: 1,
      idArea: 1,
      idActivo: 2,
      observaciones: "Todas",
      idSolicitante: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      numero: '003',
      fechaOrden: new Date(),
      idTaller: 1,
      idArea: 2,
      idActivo: 2,
      observaciones: "Ninguna",
      idSolicitante: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
