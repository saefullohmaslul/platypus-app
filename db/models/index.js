const Roles = require('./roles');
const Users = require('./users');
const sequelize = require('./sequelize');
const Cards = require('./cards');
const Points = require('./points');
const Category = require('./categories');
const Books = require('./books');
const Stocks = require('./stocks');

Roles.hasMany(Users, {
  as: 'users',
  foreignKey: 'role_id'
});

Users.belongsTo(Roles, {
  as: 'role',
  foreignKey: 'role_id'
});

Cards.belongsTo(Users, {
  as: 'users',
  foreignKey: 'user_id'
});

Points.belongsTo(Cards, {
  as: 'cards',
  foreignKey: 'card_id'
});

Cards.hasOne(Points, {
  as: 'points',
  foreignKey: 'card_id'
});

Users.hasOne(Cards, {
  as: 'card_user',
  foreignKey: 'user_id'
});

Category.hasMany(Books, {
  as: 'books',
  foreignKey: 'category_id'
});

Books.belongsTo(Category, {
  as: 'category',
  foreignKey: 'category_id'
});

Books.hasOne(Stocks, {
  as: 'stock',
  foreignKey: 'book_id'
});

Stocks.belongsTo(Books, {
  as: 'book',
  foreignKey: 'book_id'
});

module.exports = {
  sequelize,
  Users,
  Roles,
  Cards,
  Points,
  Books,
  Category,
  Stocks
};
