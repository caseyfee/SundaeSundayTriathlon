const User = require('./User');
const Event = require('./Event');
const Flavor = require ('./Flavor');
const Vote = require ('./Votes');

<<<<<<< HEAD
User.hasMany(Event, {
  foreignKey: 'user_id'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});


=======
Event.hasMany(User, {
  foreignKey: 'event_id'
});

User.belongsTo(Event, {
  foreignKey: 'event_id'
});

>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
// Connects flavors/voting/users
User.belongsToMany(Flavor, {
  through: Vote,
  foreignKey: 'user_id',
})

<<<<<<< HEAD
// Flavor belongToMany Vote (through ProductTag)
Flavor.belongsToMany(User, {
  through: Vote,
  foreignKey: 'flavor_id',
})

=======
// Flavor belongToMany Vote (through Vote)
Flavor.belongsToMany(User, {
  through: Vote,
  foreignKey: 'user_id',
})

// Flavor.hasMany(Vote, {
//   foreignKey: 'vote_id'
// })

// Vote.belongsTo(Flavor, {
//   foreignKey: 'vote_id'
// })

>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
module.exports = { User, Event, Flavor, Vote };

