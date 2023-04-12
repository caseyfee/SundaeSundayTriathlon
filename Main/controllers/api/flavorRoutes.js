const router = require('express').Router();
const { Flavor } = require('../../models');

router.get('/', async (req, res) => {
  try {
    // Get all flavors and JOIN with user data
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
