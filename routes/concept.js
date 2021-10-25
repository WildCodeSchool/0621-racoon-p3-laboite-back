const conceptRouter = require('express').Router()
const Concept = require('../models/concept')

conceptRouter.get('/', (req, res) => {
  Concept.getInfo(req.query)
    .then(concept => {
      res.json(concept)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error retrieving concepts from database')
    })
})

module.exports = conceptRouter
