'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manual extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Manual.belongsTo(models.Activo,{
        foreignKey: 'idActivo',
        target_key: 'id',
      })
    }
  };
  Manual.init({
    url: DataTypes.STRING,
    nombre: DataTypes.STRING,
    idActivo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Manual',
  });
  return Manual;
};