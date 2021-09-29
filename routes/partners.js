const partnersRouter = require('express').Router()
// const partners = require('../models/partners')

// partnersRouter.get('/partenaires', (req, res) => {
//     partners.getInfo()
//     .then(partner => {
//       res.status(200).json(partner)
//     })
//     .catch(err => {
//       console.log(err)
//       res.status(500).send('Error Server')
//     })
// })

app.get('/partenaires', (req, res) =>{
  res.status(200).send('Je suis dans le /partenaires')
})

module.exports = partnersRouter
