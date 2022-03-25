'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activo.belongsTo(models.Area, {
        foreignKey: 'idArea',
        target_key: 'id'
      }),
      Activo.belongsTo(models.Prioridad, {
        foreignKey: 'idPrioridad',
        target_key: 'id'
      }),
      Activo.belongsTo(models.Categoria, {
        foreignKey: 'idCategoria',
        target_key: 'id',
        as: 'Categoria'
      }),
      Activo.hasMany(models.Imagen,{
        foreignKey: 'idActivo'
      }),
      Activo.hasMany(models.Manual,{
        foreignKey: 'idActivo'
      }),
      Activo.hasMany(models.OrdenTrabajo,{
        foreignKey: 'idActivo'
      })
    }
  };
  Activo.init({
    nombre: DataTypes.STRING,
    etiqueta: DataTypes.STRING,
    codigo: DataTypes.STRING,
    modelo: DataTypes.STRING,
    numSerie: DataTypes.STRING,
    idArea: DataTypes.INTEGER,
    idPrioridad: DataTypes.INTEGER,
    idCategoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Activo',
  });
  return Activo;
};