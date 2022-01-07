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
     return queryInterface.bulkInsert('estadomantenimientos', [
      {
        descripcion: 'Pendiente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'En Curso',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Terminado',
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
