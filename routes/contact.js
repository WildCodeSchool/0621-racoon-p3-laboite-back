const contactRouter = require('express').Router()
const Contact = require('../models/contact')

contactRouter.get('/', (req, res) => {
  Contact.getInfo()
    .then(contact => {
      res.status(200).json(contact)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error Server')
    })
})

module.exports = contactRouter
