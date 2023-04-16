const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');


// const flavorRoutes = require('./flavorRoutes');

router.use('/users', userRoutes);
router.use('/event', eventRoutes);
// router.use ('/flavor', flavorRoutes);


module.exports = router;