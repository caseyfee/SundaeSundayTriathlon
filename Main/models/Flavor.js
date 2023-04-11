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
    },
    
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