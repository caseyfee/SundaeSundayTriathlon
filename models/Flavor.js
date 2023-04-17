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
<<<<<<< HEAD
    }
    // ,
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //       model: 'user',
    //       key: 'id',
    //   },
    // }
=======
    },
    flavor_count: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
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
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
  },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'flavor',
      }
    );
    
<<<<<<< HEAD
    module.exports = Flavor;
=======
    module.exports = Flavor;
    
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
