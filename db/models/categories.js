const { Sequelize, DataTypes } = require("sequelize")
const connection = require("./sequelize")

class Category extends Sequelize.Model {}

Category.init(
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: Sequelize.BOOLEAN, // true/false
      allowNull: false,
    },
    descriptions: {
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: connection,
    timestamp: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "categories",
  }
)

module.exports = Category
