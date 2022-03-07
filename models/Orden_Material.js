'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orden_Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Orden_Material.init({
    cantidad: DataTypes.DECIMAL(10,2),
    idMaterial: DataTypes.INTEGER,
    idOrden: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Orden_Material',
  });
  return Orden_Material;
};