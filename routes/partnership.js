const partnershipRouter = require('express').Router()
const Partnership = require('../models/partnership')

partnershipRouter.get('/', (req, res) => {
  Partnership.getInfo()
    .then(partnerPage => {
      res.status(200).json(partnerPage)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error Server')
    })
})

module.exports = partnershipRouter
