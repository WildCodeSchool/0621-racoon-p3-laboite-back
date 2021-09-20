const connection = require('../db-config')
// const Joi = require('join')

const db = connection.promise()

const getInfo = () => {
  return db.query('SELECT * FROM contact').then(([results]) => results)
}

module.exports = { getInfo }

/*

mail, phone ,adress de la boite
Social Icon, social link

! Autre us : Cotnactez l'entrperise
Recup name mail et message a envoyer par email avec nodemailer ?

const validate = (data) => {
  return Joi.object({
    name: Joi.string().max(255).required(),
    email: Joi.email().max(255).required(),
    message: Joi.string().max(3000).required(),
  }).validate(data, { abortEarly: false }).error;
};
*/
