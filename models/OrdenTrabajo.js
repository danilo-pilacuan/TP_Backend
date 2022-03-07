'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdenTrabajo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
      
      OrdenTrabajo.belongsTo(models.Taller, {
        foreignKey: 'idTaller',
        target_key: 'id'
      }),
      OrdenTrabajo.belongsTo(models.Area, {
        foreignKey: 'idArea',
        target_key: 'id'
      }),

      OrdenTrabajo.belongsTo(models.Activo, {
        foreignKey: 'idActivo',
        target_key: 'id'
      }),

      OrdenTrabajo.belongsTo(models.Trabajador, {
        foreignKey: 'idSolicitante',
        target_key: 'id'
      })
      
      OrdenTrabajo.belongsToMany(models.Tarea, {
        foreignKey: 'idOrden', 
        through: 'Orden_Tarea'
        // ,
        // as: 'OrdenTrabajos' 
      });

      OrdenTrabajo.belongsToMany(models.Material, {
        foreignKey: 'idOrden', 
        through: 'Orden_Material'
        // ,
        // as: 'OrdenTrabajos' 
      });

    }
  };
  OrdenTrabajo.init({
    numero: DataTypes.STRING,
    fechaOrden: DataTypes.DATE,
    idTaller: DataTypes.INTEGER,
    idArea: DataTypes.INTEGER,
    idActivo: DataTypes.INTEGER,
    observaciones: DataTypes.STRING,
    idSolicitante: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrdenTrabajo',
  });
  return OrdenTrabajo;
};