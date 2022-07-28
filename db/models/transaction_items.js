const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

class TransactionItems extends Sequelize.Model {}

TransactionItems.init({
    id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }

    },
    book_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'books',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
            notEmpty: true
        }
    },
    transaction_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'transactions',
            key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    stock: {
        type: Sequelize.DataTypes.INTEGER,
    },

}, {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'transaction_items'
})

module.exports = TransactionItems