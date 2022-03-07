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
     return queryInterface.bulkInsert('tallers', [
      {
        descripcion: 'Industrial',
        codigoTaller: '01',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Eléctrico',
        codigoTaller: '02',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Mecanico',
        codigoTaller: '03',
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
