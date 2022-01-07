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
     return queryInterface.bulkInsert('Prioridads', [
      {
        codigoPrioridad: 'E.E.Q.-S.I.-C.M.-PE01',
        denominacion: 'Criticidad Media',
        porcentajeMarcha: 2,
        equipoAuxiliar: 1,
        influenciaSobreProceso: 2,
        horasParoAlMes: 2,
        gradoEspecialidad: 3,
        influenciaEnLaSeguridad: 1,
        valorCriticidad: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoPrioridad: 'E.E.Q.-S.I.-C.M.-MU01',
        denominacion: 'Criticidad Alta',
        porcentajeMarcha: 1,
        equipoAuxiliar: 2,
        influenciaSobreProceso: 3,
        horasParoAlMes: 2,
        gradoEspecialidad: 1,
        influenciaEnLaSeguridad: 2,
        valorCriticidad: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoPrioridad: 'E.E.Q.-S.I.-P.R.-DU02',
        denominacion: 'Criticidad Media',
        porcentajeMarcha: 1,
        equipoAuxiliar: 2,
        influenciaSobreProceso: 3,
        horasParoAlMes: 2,
        gradoEspecialidad: 1,
        influenciaEnLaSeguridad: 2,
        valorCriticidad: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        codigoPrioridad: 'E.E.Q.-S.I.-S.U.-HY01',
        denominacion: 'Criticidad Considerable',
        porcentajeMarcha: 3,
        equipoAuxiliar: 3,
        influenciaSobreProceso: 4,
        horasParoAlMes: 1,
        gradoEspecialidad: 2,
        influenciaEnLaSeguridad: 2,
        valorCriticidad: 21,
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
