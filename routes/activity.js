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
  const { id, activity_title, activity_img, activity_desc, pole } = req.body
  // let validationErrors = null
  console.log(req.body)
  activity
    .create(id, activity_title, activity_img, activity_desc, pole)
    .then(result => res.json(result))
})

activitiesRouter.put('/:id', (req, res) => {
  let existingActivity = null
  activity
    .getById(req.params.id)
    .then(([activity]) => {
      existingActivity = activity
      if (!existingActivity) return Promise.reject('NOT_FOUND')
      return activity.update(req.params.id, req.body)
    })
    .then(() => res.status(200).json({ ...existingActivity, ...req.body }))
    .catch(err => {
      if (err === 'NOT_FOUND') res.status(404).send('Activity not found')
      else res.status(500).send('Error updating')
    })
})

module.exports = activitiesRouter
