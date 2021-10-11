// Import router: const myRouter = require('./myRoute')
const conceptRouter = require('./concept')
const contactRouter = require('./contact')
const socialRouter = require('./social')
const poleRouter = require('./pole')
const membersRouter = require('./members')
const loginRouter = require('./login')
const activitiesRouter = require('./activity')

// add your middware route: app.use('url', myRouter)
const setupRoutes = app => {
  app.use('/pole', poleRouter)
  app.use('/concept', conceptRouter)
  app.use('/contact', contactRouter)
  app.use('/social', socialRouter)
  app.use('/members', membersRouter)
  app.use('/login', loginRouter)
  app.use('/activities', activitiesRouter)
}

module.exports = { setupRoutes }
