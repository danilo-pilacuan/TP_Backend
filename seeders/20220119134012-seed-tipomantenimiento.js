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
     return queryInterface.bulkInsert('tipomantenimientos', [
      {
        descripcion: 'Limpieza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Inspección',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Pro-acción',
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
