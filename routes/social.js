const socialRouter = require('express').Router()
const Social = require('../models/social')

// récupère les icons de reseaux sociaux
socialRouter.get('/', (req, res) => {
  Social.getInfo()
    .then(social => {
      res.status(200).json(social)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Error server')
    })
})

module.exports = socialRouter
