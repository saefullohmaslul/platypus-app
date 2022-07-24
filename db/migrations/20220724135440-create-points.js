'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('points', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      card_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'cards',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      point: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      expired_at: {
        type: Sequelize.DATE,
        allowNull: false
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
