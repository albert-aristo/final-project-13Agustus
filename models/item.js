'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      item.belongsTo(models.admin, {foreignKey: "admin_id"})
      item.hasMany(models.Transaction_Item, {foreignKey: "item_id"})
    }
  };
  item.init({
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    brand: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    cost_of_good_sold: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    admin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'item',
  });
  return item;
};