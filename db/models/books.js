const { Model, DataTypes } = require("sequelize")
const connection = require("./sequelize")

class Books extends Model {}

Books.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    publish_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    publisher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isbn_no: {
      type: DataTypes.STRING,
      unique: true,
    },
    total_page: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize: connection,
    timestamp: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "books",
  }
)

module.exports = Books
