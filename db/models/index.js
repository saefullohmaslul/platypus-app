const Roles = require('./roles')
const Users = require('./users')
const sequelize = require('./sequelize')

Roles.hasMany(Users, {
  as: 'users',
  foreignKey: 'role_id',
})

Users.belongsTo(Roles, {
  as: 'role',
  foreignKey: 'role_id',
})

module.exports = {
  sequelize,
  Users,
  Roles,
}
