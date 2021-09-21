const conceptRouter = require('express').Router();
const Concept = require('../models/concept');

conceptRouter.get('/', (req, res) => {
  Concept.findMany(req.query)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('Error retrieving concepts from database')
    })
})

module.exports = conceptRouter
