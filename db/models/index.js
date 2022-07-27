const sequelize = require("./sequelize")
const Roles = require("./roles")
const Users = require("./users")
const Category = require("./categories")
const Books = require("./books")
const Stocks = require("./stocks")

Category.hasMany(Books, {
  as: "books",
  foreignKey: "category_id",
})

Books.belongsTo(Category, {
  as: "category",
  foreignKey: "category_id",
})

Books.hasOne(Stocks, {
  as: "stock",
  foreignKey: "book_id",
})

Stocks.belongsTo(Books, {
  as: "book",
  foreignKey: "book_id",
})

Roles.hasMany(Users, {
  as: "users",
  foreignKey: "role_id",
})

Users.belongsTo(Roles, {
  as: "role",
  foreignKey: "role_id",
})

module.exports = {
  sequelize,
  Users,
  Roles,
  Books,
  Category,
  Stocks,
}
