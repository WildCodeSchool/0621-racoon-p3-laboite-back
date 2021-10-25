const contactRouter = require('express').Router()
const Contact = require('../models/contact')
const nodemailer = require('../helpers/nodemailer')

//-------------------------------------------------------------------

// récupère les infos de contact de la Boite d'Acoté
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

//------------------------------------------------------------------

// Route pour envoyer un mail via nodemailer
contactRouter.post('/sendmail', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  console.log(req.body, req.body.name)
  const mailData = {
    from: name,
    to: process.env.ADRESS_EMAIL,
    subject: "Message formulaire de contact La Boite d'Acoté",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`
  }
  nodemailer
    .main(mailData, error => {
      if (error) {
        res.json({ status: 'ERROR' })
      } else {
        res.json({ status: 'Message Sent' })
      }
    })
    .then(() => res.status(200).send('Mail envoyé !'))
})

module.exports = contactRouter
