const activitiesRouter = require('express').Router()
const activity = require('../models/activity')

activitiesRouter.get('/', (req, res) => {
  activity
    .getInfo(req.query)
    .then(activity => {
      res.json(activity)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error retrieving from database')
    })
})

activitiesRouter.get('/:id', (req, res) => {
  activity.findOne(req.params.id)
    .then((activity) => {
      if (activity) res.json(activity);
      else res.status(404).send('activity not found');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error retrieving activity from database');
    });
});

// activitiesRouter.post('/', (req, res) => {
//   const { id } = req.body;
//   let validationErrors = null;
 
//     });
// });

module.exports = activitiesRouter
