const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

class Points extends Sequelize.Model {}

Points.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    card_id: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: 'cards',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    point: {
      type: Sequelize.DataTypes.INTEGER
    },
    expired_at: {
      type: Sequelize.DataTypes.DATE
    }
  },
  {
    sequelize: sequelize,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: 'points'
  }
);

module.exports = Points;
