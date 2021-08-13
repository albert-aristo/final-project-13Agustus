'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transaction.belongsTo(models.recipient, {foreignKey: "recipient_id"})
      Transaction.belongsTo(models.admin, {foreignKey: "admin_id"})
      Transaction.hasMany(models.Transaction_Item, {foreignKey: "transaction_id"})
    }
  };
  Transaction.init({
    final_amount: DataTypes.INTEGER,
    date_of_purchase: DataTypes.DATE,
    recipient_id: DataTypes.INTEGER,
    admin_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};