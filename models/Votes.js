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
<<<<<<< HEAD
        flavor_name: {
            type: DataTypes.STRING,
            references: {
                model: 'flavor',
                key: 'name',
            },
        },
        flavor_count: {
            type: DataTypes.INTEGER,
        },
=======
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
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
