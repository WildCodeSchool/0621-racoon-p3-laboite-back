const partnersRouter = require('express').Router()
const partners = require('../models/partners')

partnersRouter.get('/', (req, res) => {
    partners.getInfo()
    .then(partner => {
      res.status(200).json(partner)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error Server')
    })
})

module.exports = partnersRouter
