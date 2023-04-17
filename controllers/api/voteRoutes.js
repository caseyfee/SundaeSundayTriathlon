const router = require('express').Router();
const { Vote, Flavor } = require('../../models');

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

router.get("/", async(req,res)=>{
  try {
    const voteData = await Vote.findAll({},{
      include: [
        {
          model: Flavor,
          attributes: ['name']
        }
      ]
    });

    const votes = voteData.map((vote) => vote.get({plain:true}))
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})
// create array of labels and values from this data 

module.exports = router;