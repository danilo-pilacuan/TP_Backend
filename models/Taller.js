'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Taller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Taller.hasMany(models.OrdenTrabajo,{
        foreignKey: 'idTaller'
      })
    }
  };
  Taller.init({
    descripcion: DataTypes.STRING,
    codigoTaller: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Taller',
  });
  return Taller;
};