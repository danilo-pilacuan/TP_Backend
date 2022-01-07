'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prioridad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Prioridad.hasMany(models.Activo,{
        foreignKey: 'idPrioridad'
      })
    }
  };
  Prioridad.init({
    codigoPrioridad: DataTypes.STRING,
    denominacion: DataTypes.STRING,
    porcentajeMarcha: DataTypes.INTEGER,
    equipoAuxiliar: DataTypes.INTEGER,
    influenciaSobreProceso: DataTypes.INTEGER,
    influenciaCalidadProducto: DataTypes.INTEGER,
    horasParoAlMes: DataTypes.INTEGER,
    gradoEspecialidad: DataTypes.INTEGER,
    influenciaEnLaSeguridad: DataTypes.INTEGER,
    valorCriticidad: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prioridad',
  });
  return Prioridad;
};