'use strict';
const { hash } = require('../helpers/bcryptjs');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      admin.hasMany(models.Transaction, {foreignKey: "admin_id"})
      admin.hasMany(models.item, {foreignKey: "admin_id"})
    }
  };
  admin.init({
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'admin',
  });
  admin.addHook('beforeCreate', (user, option) => {
    user.password = hash(user.password);
  });
  return admin;
};