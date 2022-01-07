'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Edificio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Edificio.hasMany(models.Area, {
        foreignKey: 'idEdificio'
      })
    }
  };
  Edificio.init({
    descripcion: DataTypes.STRING,
    codigoEdificio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Edificio',
  });
  return Edificio;
};