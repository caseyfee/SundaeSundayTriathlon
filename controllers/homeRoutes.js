const router = require('express').Router();
const { Event, User, Flavor } = require('../models');

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all events and JOIN with user data

    const eventData = await Event.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const events = eventData.map((event) => event.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      events,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Code to get and render event data, unsure about functionality
router.get('/event/:id', async (req, res) => {
  try {
    const eventData = await Event.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });


    const event = eventData.get({ plain: true });

    res.render('event', {
      ...event,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Event }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);

  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get('/logout', (req, res) => {
  // If the user is already logged in, destroy the session and render the logout page
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.render('logout', { 
        message: 'You have been successfully logged out.'
      });
    });
  } else {
    // If the user is not logged in, redirect to the homepage
    res.redirect('/homepage');
  }
});

router.get('/voting', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  const flavorData = await Flavor.findAll();

  // Serialize data so the template can read it
  const flavors = flavorData.map((flavor) => flavor.get({ plain: true }));

  // Pass serialized data and session flag into template
  res.render('voting', {
    flavors,
    logged_in: req.session.logged_in
  });

});

  // connection to registration page
router.get('/registration', (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('registration');
})

// display registered users
router.get('/participants', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  try {
    const userData = await User.findAll({
      attributes: ['id', 'name', 'email'] // only include necessary attributes
    });

    const users = userData.map((user) => user.get({ plain: true }));

    res.render('participants', { 
      users, 
      logged_in: req.session.logged_in 
    });

  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
