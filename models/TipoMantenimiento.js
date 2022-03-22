'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoMantenimiento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      TipoMantenimiento.hasMany(models.Orden_Tarea,{
        foreignKey: 'idTipoMantenimiento'
      })
    }
  };
  TipoMantenimiento.init({
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TipoMantenimiento',
  });
  return TipoMantenimiento;
};