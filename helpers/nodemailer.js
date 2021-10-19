const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()
var smtpTransport = require('nodemailer-smtp-transport')

async function main(mailData) {
  // create reusable transporter object using the default SMTP transport
  const Transport = nodemailer.createTransport(
    smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: process.env.ADRESS_EMAIL, // generated ethereal user
        pass: process.env.ADRESS_PASSWORD // generated ethereal password
      }
    })
  )
  // send mail with defined transport object
  let info = await Transport.sendMail(mailData)
  // console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  console.log(info)
  info()
}

module.exports = { main }
