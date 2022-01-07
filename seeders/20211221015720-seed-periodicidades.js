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
     return queryInterface.bulkInsert('Periodicidads', [
      {
        descripcion: 'Semanal',
        numSemanas : 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Quincenal',
        numSemanas : 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Mensual',
        numSemanas : 4,
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
