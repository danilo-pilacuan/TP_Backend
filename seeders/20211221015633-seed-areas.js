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
     return queryInterface.bulkInsert('Areas', [
      {
        descripcion: 'Carpinteria Metálica',
        codigoArea: 'C.M.-',
        idEdificio: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Producción',
        codigoArea: 'P.R.-',
        idEdificio: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Suelda',
        codigoArea: 'S.U.-',
        idEdificio: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Fragua',
        codigoArea: 'F.R.-',
        idEdificio: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Máquinas Herramientas',
        codigoArea: 'M.H.-',
        idEdificio: 1,
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
