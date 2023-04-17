const sequelize = require('../config/connection');
<<<<<<< HEAD
const { User, Event, Flavor } = require('../models');
=======
const { User, Event, Flavor, Vote } = require('../models');
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d


const flavorData = require('./flavors.json');
const userData = require('./userData.json');
const eventData = require('./eventData.json');
<<<<<<< HEAD
=======
const voteData = require('./votes.json');
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

<<<<<<< HEAD
=======
  const events = await Event.bulkCreate(eventData, {
    individualHooks: true,
    returning: true,
  });
  
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const flavors = await Flavor.bulkCreate(flavorData, {
    individualHooks: true,
    returning: true,
  });

<<<<<<< HEAD
  const events = await Event.bulkCreate(eventData, {
=======
  const votes = await Vote.bulkCreate(voteData, {
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
    individualHooks: true,
    returning: true,
  });
  
  process.exit(0);
};

seedDatabase();
