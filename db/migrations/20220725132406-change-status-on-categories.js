'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn("categories", "status", {
      type: Sequelize.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn("categories", "status", {
      type: Sequelize.BOOLEAN,
    });
  }
};
