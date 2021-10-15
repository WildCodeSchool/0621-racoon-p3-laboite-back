const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const { setupRoutes } = require('./routes')
const connection = require('./db-config.js')
const app = express()
const multer = require('multer')

const port = process.env.PORT || 4000

// Connection MySQL
connection.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack)
  } else {
    console.log('connected to database with threadId :  ' + connection.threadId)
  }
})

//multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images')
  },
  filename: (req, file, cb) => {
    console.log('YOLO file', file)
    cb(null, file.originalname)
  }
})

//multer upload
const upload = multer({
  storage: storage
  // fileFilter(req, file, cb) {
  //   if(!file.fieldname.originalname.match(/\.(jpeg|jpg)$/)) {
  //     return cb(new Error('.jpg or .jpeg allowed'))
  //   }
  // }
})

app.post('/upload', upload.fields([{name: 'activity_img'}, {name: 'pole_banner'}, {name: 'pole_func_img'}, {name: 'pole_miniature_img'}, {name: 'member_img'}]), (req, res) => {
  res.status(200).json('Uploaded')
})

// Route middleware
app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/static', express.static(__dirname + '/public'))

// app.get('/partenaires', (req, res) =>{
//   res.status(200).send('Je suis dans le /')
// })

setupRoutes(app)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})