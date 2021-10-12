// Import router: const myRouter = require('./myRoute')
const conceptRouter = require('./concept')
const contactRouter = require('./contact')
const socialRouter = require('./social')
const poleRouter = require('./pole')
const teamRouter = require('./team')
const loginRouter = require('./login')
<<<<<<< Updated upstream
=======
const activitiesRouter = require('./activity')
const partnershipRouter = require('./partnership')
const partnersRouter = require('./partners')
>>>>>>> Stashed changes

// add your middware route: app.use('url', myRouter)
const setupRoutes = app => {
  app.use('/pole', poleRouter)
  app.use('/concept', conceptRouter)
  app.use('/contact', contactRouter)
  app.use('/social', socialRouter)
  app.use('/team', teamRouter)
  app.use('/login', loginRouter)
<<<<<<< Updated upstream
=======
  app.use('/activities', activitiesRouter)
  app.use('/partnership', partnershipRouter)
  app.use('/partners', partnersRouter)
>>>>>>> Stashed changes
}

module.exports = { setupRoutes }
