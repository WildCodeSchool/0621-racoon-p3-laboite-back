const contactRouter = require('express').Router()
const Contact = require('../models/contact')
const contactEmail = require('../helpers/contactEmail')

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

contactRouter.post('/sendmail', (req, res) => {
  const name = req.body[0].name
  const email = req.body[0].email
  const message = req.body[0].message
  console.log(req.body[0], req.body[0].name)
  const mailData = {
    from: name,
    to: 'wcs.dev.boitedacote@gmail.com',
    subject: "Message formulaire de contact La Boite d'Acoté",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`
  }
  contactEmail
    .main(mailData, error => {
      if (error) {
        res.json({ status: 'ERROR' })
      } else {
        res.json({ status: 'Message Sent' })
      }
    })
    .then(() => res.status(200).json('Mail envoyé !}'))
})

module.exports = contactRouter
