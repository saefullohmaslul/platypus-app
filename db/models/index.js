const Roles = require('./roles');
const Users = require('./users');
const sequelize = require('./sequelize');
const Cards = require('./cards');
const Points = require('./points');

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

module.exports = {
  sequelize,
  Users,
  Roles,
  Cards,
  Points
};
