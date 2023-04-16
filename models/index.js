const User = require('./User');
const Event = require('./Event');
const Flavor = require ('./Flavor');
const Vote = require ('./Votes');

User.hasMany(Event, {
  foreignKey: 'user_id'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});


// Connects flavors/voting/users
User.belongsToMany(Flavor, {
  through: Vote,
  foreignKey: 'user_id',
})

// Flavor belongToMany Vote (through Vote)
Flavor.belongsToMany(User, {
  through: Vote,
  foreignKey: 'flavor_id',
})

// Flavor.hasMany(Vote, {
//   foreignKey: 'vote_id'
// })

// Vote.belongsTo(Flavor, {
//   foreignKey: 'vote_id'
// })

module.exports = { User, Event, Flavor, Vote };

