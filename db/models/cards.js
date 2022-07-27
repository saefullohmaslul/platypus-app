const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

class Cards extends Sequelize.Model {}

Cards.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    type: {
      type: Sequelize.DataTypes.STRING
    },
    status: {
      type: Sequelize.DataTypes.ENUM,
      values: ['ACTIVE', 'NON_ACTIVE']
    }
  },
  {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'cards'
  }
);

module.exports = Cards;
