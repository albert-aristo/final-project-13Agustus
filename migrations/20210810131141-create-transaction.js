'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      final_amount: {
        type: Sequelize.INTEGER
      },
      date_of_purchase: {
        type: Sequelize.DATE
      },
      recipient_id: {
        type: Sequelize.INTEGER,
        references: {model: 'recipients', key: 'id'}
      },
      admin_id: {
        type: Sequelize.INTEGER,
        references: {model: 'admins', key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Transactions');
  }
};