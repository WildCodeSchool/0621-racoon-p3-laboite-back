const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const { setupRoutes } = require('./routes');

const connection = require('./db-config.js')

const app = express()

setupRoutes(app);

const port = process.env.PORT || 4000

// Connection MySQL
connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack)
  } else {
    console.log('connected to database with threadId :  ' + connection.threadId)
  }
})

// Route middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extend: true }))

app.use('/url', Router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
