const Roles = require('./roles')
const Users = require('./users')
const Transactions = require('./transactions')
const TransactioniItems = require('./transaction_items')
const sequelize = require('./sequelize')

Roles.hasMany(Users, {
    as: 'users',
    foreignKey: 'role_id',
})



Users.belongsTo(Roles, {
    as: 'role',
    foreignKey: 'role_id',

})

Transactions.hasMany(Users, {
    as: 'users',
    foreignKey: 'user_id',
})

// Transaction_items.hasMany(books, {
//     as: 'books',
//     foreignKey: 'book_id',
// })

TransactionItems.hasMany(Transactions, {
    as: 'transactions',
    foreignKey: 'transaction_id',
})


module.exports = {
    sequelize,
    Users,
    Roles,
    Transactions,
    TransactioniItems
}