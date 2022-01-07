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
     return queryInterface.bulkInsert('Edificios', [
      {
        descripcion: 'Principal',
        codigoEdificio: 'S.I-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Matriz',
        codigoEdificio: 'M.I-',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Matriz2',
        codigoEdificio: 'M.I-2',
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
