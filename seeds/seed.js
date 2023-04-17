const sequelize = require('../config/connection');
const { User, Event, Flavor, Vote } = require('../models');


const flavorData = require('./flavors.json');
const userData = require('./userData.json');
const eventData = require('./eventData.json');
const voteData = require('./votes.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const events = await Event.bulkCreate(eventData, {
    individualHooks: true,
    returning: true,
  });
  
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const flavors = await Flavor.bulkCreate(flavorData, {
    individualHooks: true,
    returning: true,
  });

  const votes = await Vote.bulkCreate(voteData, {
    individualHooks: true,
    returning: true,
  });
  
  process.exit(0);
};

seedDatabase();
