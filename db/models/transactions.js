const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

class Transactions extends Sequelize.Model {}

Transactions.init({
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
    user_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        validate: {
            notEmpty: true
        }
    },
    transcation_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    return_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }

    },
    pinalty_amount: {
        type: Sequelize.DataTypes.INTEGER,
    },
    point_amount: {
        type: Sequelize.DataTypes.INTEGER,

    },
    status: {
        type: Sequelize.DataTypes.ENUM,
        values: ['PAID', 'CANCEL', 'PENDING'],
    }
}, {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'Transactions'
})

module.exports = Transactions