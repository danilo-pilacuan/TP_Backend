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
      mantenimiento: 'limpieza',
      idTrabajadorResponsable: 1,
      semanaInicial: 38,
      idPeriodicidad: 1,
      idEstadoMantenimiento: 1,
      idActivo: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: 'Verificación de rodamientos',
      mantenimiento: 'Inspección',
      idTrabajadorResponsable: 2,
      semanaInicial: 38,
      idPeriodicidad: 2,
      idEstadoMantenimiento: 2,
      idActivo: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descripcion: 'Revisión eléctrica',
      mantenimiento: 'Inspección',
      idTrabajadorResponsable: 1,
      semanaInicial: 38,
      idPeriodicidad: 3,
      idEstadoMantenimiento: 3,
      idActivo: 3,
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
