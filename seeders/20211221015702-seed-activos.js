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
     return queryInterface.bulkInsert('Activos', [
      {
        nombre: 'Cizalla Múltiple Mecánica',
        etiqueta: 'PE01',
        codigo: 'E.E.Q.-S.I.-C.M.-PE01',
        modelo: '03/5R',
        numSerie: '---',
        idArea: 1,
        idPrioridad: 1,
        idCategoria: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cizalla Punzonadora',
        etiqueta: 'MU01',
        codigo: 'E.E.Q.-S.I.-C.M.-MU01',
        modelo: '31-10',
        numSerie: '---',
        idArea: 2,
        idPrioridad: 2,
        idCategoria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cizalla Universal',
        etiqueta: 'DU02',
        codigo: 'E.E.Q.-S.I.-P.R.-DU02',
        modelo: 'IW 55',
        numSerie: '662006418',
        idArea: 2,
        idPrioridad: 3,
        idCategoria: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Cortadora de Plasma N°1',
        etiqueta: 'HY01',
        codigo: 'E.E.Q.-S.I.-S.U.-HY01',
        modelo: 'POWERCUT 875',
        numSerie: 'DT–37450',
        idArea: 3,
        idPrioridad: 4,
        idCategoria: 2,
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
