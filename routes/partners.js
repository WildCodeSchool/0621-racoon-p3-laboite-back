const partnersRouter = require('express').Router()
const Partners = require('../models/partners')

partnersRouter.get('/', (req, res) => {
<<<<<<< Updated upstream
  Partners.getInfo()
=======
  partners
    .getInfo()
>>>>>>> Stashed changes
    .then(partner => {
      res.status(200).json(partner)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Error Server')
    })
})

module.exports = partnersRouter
