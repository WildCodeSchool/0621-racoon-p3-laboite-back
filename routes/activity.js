const activitiesRouter = require('express').Router()
const activity = require('../models/activity')
// const upload = multer({ dest: '../public/images' })

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
  activity
    .getById(req.params.id)
    .then(activity => {
      if (activity) res.json(activity)
      else res.status(404).send('activity not found')
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Error retrieving activity from database')
    })
})

activitiesRouter.post('/', (req, res) => {
  console.log('poulet01', req.file);
  const { id, activity_title, activity_img, activity_desc, pole } = req.body
  activity
    .create(id, activity_title, activity_img, activity_desc, pole)
    .then(result => res.json(result))
})

activitiesRouter.put('/:id', (req, res) => {
  const activityId = req.params.id
  activity
    .update(activityId, req.body)
    .then(() => res.status(200).json(req.body))
    .catch(err => res.status(500).send('Error modifying data'))
})

activitiesRouter.delete('/:id', (req, res) => {
  activity
    .destroy(req.params.id)
    .then(deleted => {
      if (deleted) res.status(200).send('Activity deleted')
      else res.status(404).send('Activity not found')
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error deleting activity')
    })
})

module.exports = activitiesRouter
