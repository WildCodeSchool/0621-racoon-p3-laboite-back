const activitiesRouter = require('express').Router()
const activity = require('../models/activity')
const { verifyToken } = require('../helpers/Jwt')

activitiesRouter.get('/', (req, res) => {
  activity
    .getInfo(req.query)
    .then(activity => {
      res.json(activity)
    })
    .catch(err => {
      console.log(err)
      res
        .status(500)
        .json({ message: 'Error retrieving activity from database' })
    })
})

activitiesRouter.get('/:id', (req, res) => {
  activity
    .getById(req.params.id)
    .then(activity => {
      if (!activity) res.status(404).json({ message: `Activity not found` })
      else res.status(200).json(activity)
    })
    .catch(err => {
      console.error(err)
      res
        .status(500)
        .json({ message: 'Error retrieving activity from database' })
    })
})

activitiesRouter.post('/', verifyToken, (req, res) => {
  const { id, activity_title, activity_img, activity_desc, pole_id } = req.body

  if (!activity_title)
    res.status(401).json({ message: 'Activity title is required' })
  else {
    activity.findOneWithTitle(activity_title).then(duplicateActivity => {
      if (duplicateActivity) {
        res.status(401).json({ message: `Activity already exists` })
      } else {
        activity
          .create(id, activity_title, activity_img, activity_desc, pole_id)
          .then(result =>
            res
              .status(201)
              .json({ message: 'Activity Created !', activity: result })
          )
          .catch(err => {
            console.error(err)
            res.status(500).json({ message: `Error saving the activity` })
          })
      }
    })
  }
})

activitiesRouter.put('/:id', verifyToken, (req, res) => {
  const activity_id = req.params.id
  activity
    .update(activity_id, req.body)
    .then(() =>
      res
        .status(200)
        .json({ message: 'Activity updated !', activity: { ...req.body } })
    )
    .catch(err => {
      console.error(err)
      res.status(500).json({ message: `Error updating the activity` })
    })
})

activitiesRouter.delete('/:id', verifyToken, (req, res) => {
  activity
    .destroy(req.params.id)
    .then(deleted => {
      if (deleted) res.status(200).json({ message: `🎉 Activity deleted!` })
      else res.status(404).json({ message: `Activity not found` })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: `Error deleting an Activity` })
    })
})

module.exports = activitiesRouter
