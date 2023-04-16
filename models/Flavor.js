const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Flavor extends Model {}

Flavor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
    ,
    user_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'user',
          key: 'id',
      },
    },
    vote_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'vote',
          key: 'id',
      },
    }
  },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'flavor',
      }
    );
    
    module.exports = Flavor;