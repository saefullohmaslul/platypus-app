const Roles = require('./roles');
const Users = require('./users');
const sequelize = require('./sequelize');
const Cards = require('./cards');
const Points = require('./points');
const Categories = require('./categories');
const Books = require('./books');
const Stocks = require('./stocks');
const Transactions = require('./transactions')
const TransactionItems = require('./transaction_items')

Roles.hasMany(Users, {
    as: 'users',
    foreignKey: 'role_id'
});

Users.belongsTo(Roles, {
    as: 'role',
    foreignKey: 'role_id'
});

Cards.belongsTo(Users, {
    as: 'user',
    foreignKey: 'user_id'
});

Points.belongsTo(Cards, {
    as: 'card',
    foreignKey: 'card_id'
});

Cards.hasOne(Points, {
    as: 'point',
    foreignKey: 'card_id'
});

Users.hasOne(Cards, {
    as: 'card',
    foreignKey: 'user_id'
});

Categories.hasMany(Books, {
    as: 'books',
    foreignKey: 'category_id'
});

Books.belongsTo(Categories, {
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

Transactions.belongsTo(Users, {
    as: 'users',
    foreignKey: 'user_id',
})

TransactionItems.hasMany(Books, {
    as: 'books',
    foreignKey: 'book_id',
})

TransactionItems.hasMany(Transactions, {
    as: 'transactions',
    foreignKey: 'transaction_id',
})


module.exports = {
    sequelize,
    Users,
    Roles,
    Transactions,
    TransactionItems,
    Cards,
    Points,
    Books,
    Categories,
    Stocks
};