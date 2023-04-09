const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

// {{!-- generic flow of site --}}
// {{!-- All these info-boxes should be a seperate partial, and what the main page is directed to right away --}}
// {{!-- Once the user clicks the sign up button , they should be directed to the login page--}}
// {{!-- Once they log in, then they are directed to teh sign up page --}}
// {{!-- once signed up they should have access to the voting and participant page --}}
