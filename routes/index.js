// Import router: const myRouter = require('./myRoute')
const conceptRouter = require('./concept')
const contactRouter = require('./contact')
const socialRouter = require('./social')
const poleRouter = require('./pole')
const membersRouter = require('./members')
const loginRouter = require('./login')
const activitiesRouter = require('./activity')
const partnershipRouter = require('./partnership')
const partnersRouter = require('./partners')

// add your middware route: app.use('url', myRouter)
const setupRoutes = app => {
  app.use('/poles', poleRouter)
  app.use('/concept', conceptRouter)
  app.use('/contact', contactRouter)
  app.use('/social', socialRouter)
  app.use('/members', membersRouter)
  app.use('/login', loginRouter)
  app.use('/activities', activitiesRouter)
  app.use('/partnership', partnershipRouter)
  app.use('/partners', partnersRouter)
}

module.exports = { setupRoutes }
