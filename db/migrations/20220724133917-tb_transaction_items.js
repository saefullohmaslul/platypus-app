'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'tb_transaction_items',
      { 
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        book_id: {
          type: Sequelize.INTEGER,
          allowNull: false
          // references: {
          //   model: 'book',
          //   key: 'id'
          // },
          // onDelete: 'CASCADE',
          // onUpdate: 'CASCADE'
        },
        transaction_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: 'tb_transactions',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        stock: {
          type: Sequelize.INTEGER,
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
