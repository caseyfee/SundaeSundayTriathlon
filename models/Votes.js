const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Vote extends Model { }

Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        flavor_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'flavor',
                key: 'id',
            },
        },
        flavor_name: {
            type: DataTypes.STRING,
            references: {
                model: 'flavor',
                key: 'flavor_name',
            },
        },
        flavor_count: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote',
    }
);

module.exports = Vote;
