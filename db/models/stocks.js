const { DataTypes, Model } = require("sequelize")
const connection = require("./sequelize")

class Stocks extends Model {}

Stocks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    book_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "books",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    available_stock: {
      type: DataTypes.INTEGER,
    },
    total_stock: {
      type: DataTypes.INTEGER,
    },
    rent_stock: {
      type: DataTypes.INTEGER,
    },
    broken_stock: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: connection,
    timestamp: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "stocks",
  }
)

module.exports = Stocks
