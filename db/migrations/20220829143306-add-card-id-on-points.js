'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('points', 'card_id', { 
      type: Sequelize.INTEGER,
      refereces: {
        model: 'cards',
        key: 'id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('points', 'card_id');
  }
};
