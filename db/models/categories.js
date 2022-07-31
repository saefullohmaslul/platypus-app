const { Model, DataTypes } = require("sequelize")
const connection = require("./sequelize")

class Categories extends Model {}

Categories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN, // true/false
      allowNull: false,
    },
    descriptions: {
      type: DataTypes.STRING,
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

module.exports = Categories
