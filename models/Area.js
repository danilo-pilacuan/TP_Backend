'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Area.belongsTo(models.Edificio, {
        foreignKey: 'idEdificio',
        target_key: 'id'
      })
      ,
      Area.hasMany(models.Trabajador,{
        as: 'Trabajadores',
        foreignKey: 'idArea'
      }),
      Area.hasMany(models.Activo,{
        foreignKey: 'idArea'
      })
    }
  };
  Area.init({
    descripcion: DataTypes.STRING,
    codigoArea: DataTypes.STRING,
    idEdificio: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Area',
  });
  return Area;
};