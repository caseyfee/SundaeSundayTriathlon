// Participants page with events
// change from projectRoutes to eventRoutes
const router = require('express').Router();
const { Event } = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req,res) => {
  try {

  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/id:', async (req,res) => {
  try {

  } catch (err) {
    res.status(500).json(err);
  }
});
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newEvent = await Event.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newEvent);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const eventData = await Event.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!eventData) {
//       res.status(404).json({ message: 'No event found with this id!' });
//       return;
//     }

//     res.status(200).json(eventData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
