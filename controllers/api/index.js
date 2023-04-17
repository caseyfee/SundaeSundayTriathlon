const router = require('express').Router();
const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes');
<<<<<<< HEAD
=======
const voteRoutes = require('./voteRoutes');
>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d


// const flavorRoutes = require('./flavorRoutes');

router.use('/users', userRoutes);
router.use('/event', eventRoutes);
<<<<<<< HEAD
=======
router.use('/vote', voteRoutes);

>>>>>>> d007e0448b9e73a9bd89002c9ec20364a8d3813d
// router.use ('/flavor', flavorRoutes);


module.exports = router;