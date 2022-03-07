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
    return queryInterface.bulkInsert('tareas', [
    {
      descripcion: 'Limpieza de piezas metálicas',
      //fechaInicio: new Date(),
      //semanaInicial: 38,
      //idTrabajadorResponsable: 1,
      idPeriodicidad: 1,
      idEstadoMantenimiento: 1,
     // idActivo: 1,
      //idOrdenTrabajo: 1,
      idTipoMantenimiento: 1,
      numeroResponsables: 1,
      horasHombre: 3,
      costoHora: 6.83,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: 'Verificación de rodamientos',
      //fechaInicio: new Date(),
      //semanaInicial: 38,
      //idTrabajadorResponsable: 2,
      idPeriodicidad: 2,
      idEstadoMantenimiento: 2,
      //idActivo: 2,
      //idOrdenTrabajo: 1,
      idTipoMantenimiento: 2,
      numeroResponsables: 2,
      horasHombre: 4,
      costoHora: 6.83,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: 'Revisión eléctrica',
      //fechaInicio: new Date(),
      //semanaInicial: 38,
      //idTrabajadorResponsable: 1,
      idPeriodicidad: 3,
      idEstadoMantenimiento: 3,
      //idActivo: 3,
      idTipoMantenimiento: 3,
      //idOrdenTrabajo: 1,
      numeroResponsables: 3,
      horasHombre: 2,
      costoHora: 6.83,
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
