'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orden_Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Orden_Tarea.hasMany(models.OrdenTrabajo,{
      //   foreignKey: 'id'
      // })
      // Orden_Tarea.hasMany(models.Tarea,{
      //   foreignKey: 'idTarea'
      // })

      Orden_Tarea.belongsTo(models.Tarea, {
        foreignKey: 'idTarea',
        target_key: 'id'
      }),
      Orden_Tarea.belongsTo(models.OrdenTrabajo, {
        foreignKey: 'idOrden',
        target_key: 'id'
      })
      // Activo.hasMany(models.Imagen,{
      //   foreignKey: 'idActivo'
      // }),

    }
  };
  Orden_Tarea.init({
    fechaSolicitud: DataTypes.DATE,
    semanaInicial: DataTypes.INTEGER,
    idTarea: DataTypes.INTEGER,
    idOrden: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orden_Tarea',
  });
  return Orden_Tarea;
};