const activitiesRouter = require('express').Router()
const activity = require('../models/activity')
const multer = require('multer')
const path = require('path')
// const upload = multer({ dest: '../public/images' })

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/images')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({
  storage: storage
})


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

activitiesRouter.post('/', upload.single('activity_img'), (req, res) => {
  console.log('poulet01', req.file);
  const { id, activity_title, activity_img, activity_desc, pole } = req.body
  // const { activity_img } = req.file
  // activity
  //   .create(id, activity_title, activity_img, activity_desc, pole)
  //   .then(result => res.json(result))
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
