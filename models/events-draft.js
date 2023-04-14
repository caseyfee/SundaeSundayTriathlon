// *Drafted events model. Code commented out to allow actual model's file to work

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Events extends Model {}
// // Events model to use event information 
// // id and name params linked to User.js model
// Events.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//           },
//           name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//           },
//           description: {
//             type: DataTypes.STRING,
//           },
//           date_start: {
//             type: DataTypes.DATE,
//             allowNull: false,
//             defaultValue: DataTypes.NOW,
//           },
//           user_id: {
//             type: DataTypes.INTEGER,
//             references: {
//               model: 'user',
//               key: 'id',
//             },
//           },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'event', 
//     }
// );

// module.exports = Events;