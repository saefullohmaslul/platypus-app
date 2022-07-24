'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'tb_transactions',
      { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false
          // references: {
          //   model: 'book',
          //   key: 'id'
          // },
          // onDelete: 'CASCADE',
          // onUpdate: 'CASCADE'
        },
        transaction_date: {
          type: Sequelize.DATE,
          allowNull: false
          // references: {
          //   model: 'book',
          //   key: 'id'
          // },
          // onDelete: 'CASCADE',
          // onUpdate: 'CASCADE'
        },
        return_date: {
          type: Sequelize.DATE,
          // allowNull: false
          // references: {
          //   model: 'book',
          //   key: 'id'
          // },
          // onDelete: 'CASCADE',
          // onUpdate: 'CASCADE'
        },
        pinalty_amount: {
          type: Sequelize.INTEGER,
          // allowNull: false
          // references: {
          //   model: 'book',
          //   key: 'id'
          // },
          // onDelete: 'CASCADE',
          // onUpdate: 'CASCADE'
        },
        point_amount: {
          type: Sequelize.INTEGER,
          // allowNull: false
          // references: {
          //   model: 'book',
          //   key: 'id'
          // },
          // onDelete: 'CASCADE',
          // onUpdate: 'CASCADE'
        },
        status: {
          type: Sequelize.BOOLEAN,
          // allowNull: false
          // references: {
          //   model: 'book',
          //   key: 'id'
          // },
          // onDelete: 'CASCADE',
          // onUpdate: 'CASCADE'
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
        },
      },
    );
  },

  async down (queryInterface, Sequelize) {
  
  }
};
