"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("stocks", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      book_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "books",
          key: "id",
        },
      },
      availableStock: {
        type: Sequelize.INTEGER,
      },
      totalStock: {
        type: Sequelize.INTEGER,
      },
      rentStock: {
        type: Sequelize.INTEGER,
      },
      brokenStock: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("stocks")
  },
}
