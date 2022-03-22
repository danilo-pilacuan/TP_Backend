'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Tarea.belongsTo(models.Activo, {
      //   foreignKey: 'idActivo',
      //   target_key: 'id'
      // }),
      // Tarea.belongsTo(models.Trabajador, {
      //   foreignKey: 'idTrabajadorResponsable',
      //   target_key: 'id'
      // }),
      
      Tarea.belongsToMany(models.OrdenTrabajo, {
        foreignKey: 'idTarea', 
        through: 'Orden_Tarea'
        // ,
        // as: 'OrdenTrabajos' 
      });
    }
  };
  Tarea.init({
    descripcion: DataTypes.STRING,
    //fechaInicio: DataTypes.DATE,
    //semanaInicial: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Tarea',
  });
  return Tarea;
};