'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trabajador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trabajador.belongsTo(models.Area,{
        foreignKey: 'idArea',
        target_key: 'id'
      }),
      Trabajador.hasMany(models.Tarea,{
        foreignKey: 'idTrabajadorResponsable'
      })
    }
  };
  Trabajador.init({
    cedula: DataTypes.STRING,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    idArea: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trabajador',
  });
  return Trabajador;
};