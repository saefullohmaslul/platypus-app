'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('points', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false,
        references: {
          model: 'cards',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      point: {
        type: Sequelize.INTEGER,
        default: 0,
        allowNull: false
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        default: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        default: new Date()
      },
      deleted_at: {
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('points');
  }
};
