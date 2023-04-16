const router = require('express').Router();
const { Vote } = require('../models');

router.post('/', async (req, res) => {
  try {
    const { flavorId, userId } = req.body;
    const newVote = await Vote.create({
      flavor_id: flavorId,
      user_id: userId
    });
    res.status(201).json(newVote);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;