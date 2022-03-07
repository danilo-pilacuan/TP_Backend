'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Material.belongsTo(models.OrdenTrabajo,{
      //   foreignKey: 'idOrdenTrabajo',
      //   targetKey: 'id'
      // })
      Material.belongsToMany(models.OrdenTrabajo, {
        foreignKey: 'idMaterial', 
        through: 'Orden_Material'
        // ,
        // as: 'OrdenTrabajos' 
      });
    }
  };
  Material.init({
    descripcion: DataTypes.STRING,
    // cantidad: DataTypes.DECIMAL(10, 2),
    unidad: DataTypes.STRING,
    precioUnitario: DataTypes.DECIMAL(10, 2) 
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};