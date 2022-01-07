'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Periodicidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Periodicidad.hasMany(models.Tarea,{
        foreignKey: 'idPeriodicidad'
      })
    }
  };
  Periodicidad.init({
    descripcion: DataTypes.STRING,
    numSemanas: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Periodicidad',
  });
  return Periodicidad;
};