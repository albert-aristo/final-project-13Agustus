'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction_Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction_Item.init({
    item_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Transaction_Item',
  });
  return Transaction_Item;
};