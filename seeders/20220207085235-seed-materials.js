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
     return queryInterface.bulkInsert('Materials', [
      {
        descripcion: 'Aceite Lubricante DW-40',
        //cantidad: 0.5,
        unidad: "galón",
        precioUnitario: 5.10,
        //idOrdenTrabajo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Guaipe',
        //cantidad: 10,
        unidad: "unidad",
        precioUnitario: 0.2,
        //idOrdenTrabajo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Guaipe',
        //cantidad: 10,
        unidad: "unidad",
        precioUnitario: 0.2,
        //idOrdenTrabajo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Guaipe',
       // cantidad: 10,
        unidad: "unidad",
        precioUnitario: 0.2,
      //  idOrdenTrabajo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Aceite Lubricante DW-40',
        //cantidad: 4,
        unidad: "galón",
        precioUnitario: 5.10,
        //idOrdenTrabajo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Thinner',
        //cantidad: 0.5,
        unidad: "Galón",
        precioUnitario: 0.2,
       // idOrdenTrabajo: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Thinner',
       // cantidad: 0.5,
        unidad: "Galón",
        precioUnitario: 0.2,
       // idOrdenTrabajo: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Thinner',
       // cantidad: 0.5,
        unidad: "Galón",
        precioUnitario: 0.2,
       // idOrdenTrabajo: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
