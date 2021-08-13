'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('admins','status',{type: Sequelize.BOOLEAN})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('admins','status')
  }
};