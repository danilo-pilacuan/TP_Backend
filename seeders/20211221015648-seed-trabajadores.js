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
     return queryInterface.bulkInsert('Trabajadors', [
      {
        cedula: '1724987423',
        nombres: 'Miguel',
        apellidos: 'Gavilanes',
        idArea: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        cedula: '1724987424',
        nombres: 'Iván',
        apellidos: 'Pachacama',
        idArea: 2,
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
